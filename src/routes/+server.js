import { json } from '@sveltejs/kit';
import puppeteer from 'puppeteer';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { searchTerm } = await request.json();
  console.log(searchTerm);
  const res = await run(`${searchTerm}`);
  return json(res);
}

export async function run(name) {
  console.log(`running puppeteer with name: ${name}`);
  const collectItems = () => {
    const numerize = (stringNumber) => {
      const str = stringNumber.replace(/[^0-9,.]+/g, '').replace(',', '.');
      return parseFloat(str);
    };

    const CARDS_SELECTOR = '.card.card-lg';
    const NAME_SELECTOR = '.wine-card__name';
    const COUNTRY_SELECTOR = '.wine-card__region [data-item-type="country"]';
    const REGION_SELECTOR = '.wine-card__region .link-color-alt-grey';
    const AVERAGE_RATING_SELECTOR = '.average__number';
    const RATINGS_SELECTOR = '.average__stars .text-micro';
    const RATING_REPLACMENT = 'ratings';
    const LINK_SELECTOR = 'a';
    const THUMB_SELECTOR = 'figure';
    const THUMB_REGEX = /"(.*)"/;

    const data = [...document.querySelectorAll(CARDS_SELECTOR)].map((e) => {
      const name = e.querySelector(NAME_SELECTOR) ? e.querySelector(NAME_SELECTOR).textContent.trim() : undefined;
      const link = e.querySelector(LINK_SELECTOR).href;
      const thumb = e.querySelector(THUMB_SELECTOR)
        ? 'https:' + e.querySelector(THUMB_SELECTOR).style.backgroundImage.match(THUMB_REGEX)[1]
        : undefined;
      const country = e.querySelector(COUNTRY_SELECTOR)
        ? e.querySelector(COUNTRY_SELECTOR).textContent.trim()
        : undefined;
      const region = e.querySelector(REGION_SELECTOR) ? e.querySelector(REGION_SELECTOR).textContent.trim() : undefined;
      const average_rating = e.querySelector(AVERAGE_RATING_SELECTOR)
        ? numerize(e.querySelector(AVERAGE_RATING_SELECTOR).textContent.trim())
        : undefined;
      const ratings = e.querySelector(RATINGS_SELECTOR)
        ? Number(e.querySelector(RATINGS_SELECTOR).textContent.replace(RATING_REPLACMENT, '').trim())
        : undefined;

      return {
        name: name,
        link: link,
        thumb: thumb,
        country: country,
        region: region,
        average_rating: average_rating,
        ratings: ratings
      };
    });
    return data;
  };

  const BASE_URL = 'https://www.vivino.com';
  const SEARCH_PATH = '/search/wines?q=';
  const STATUS_FULL = 'FULL_DATA';
  const STATUS_ERROR_RESPONSE = 'RESPONSE_ERROR';
  const STATUS_ERROR_EXCEPTION = 'SOME_EXCEPTION';
  const PAUSE_MULTIPLIER = 15;

  const result = { vinos: [] };

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1920, height: 1040 },
    devtools: false,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();

  // need to set User Agent else an empty result
  // it seems they detect headless Chrome
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
  );

  // To save bandwidth block all types of requests except "document", "xhr", "fetch"
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (['document', 'xhr', 'fetch', 'script'].includes(request.resourceType())) {
      request.continue();
    } else {
      request.abort();
    }
  });

  try {
    page.setDefaultNavigationTimeout(0);

    // load home page
    await page.goto(BASE_URL, { waitUntil: 'networkidle2' });

    let index = 1;
    let isNext = false;
    let pause = 0;
    let pageIndex = 1;
    let maxPages = 1;

    do {
      isNext = false;
      const response = await page.goto(`${BASE_URL}${SEARCH_PATH}${name}&start=${index}`, {
        waitUntil: 'networkidle2'
      });

      if (response.ok()) {
        pause = 0;
        const pageItems = await page.evaluate(collectItems);
        if (pageItems.length) {
          console.log('Results were collected from the page:', index);
          result.vinos.push(...pageItems);
          index++;
          pageIndex++;
          isNext = true;
        } else {
          // no more data
          result.status = STATUS_FULL;
        }
      } else if (response.status() === 429) {
        pause++;
        await page.waitForTimeout(pause * PAUSE_MULTIPLIER * 1000);
        console.log(`Waited for ${pause * PAUSE_MULTIPLIER} seconds on the page ${index}`);
        isNext = true;
      } else {
        // return some error info
        result.http_status = response.status(); // http status
        result.page_index = index; // index of the problem page
        result.status = STATUS_ERROR_RESPONSE;
      }
    } while (isNext && pageIndex < maxPages);
  } catch (error) {
    result.status = STATUS_ERROR_EXCEPTION;
    result.message = error;
    console.log('Exception:', error);
  } finally {
    console.log('Finish!');
    await browser.close();
    if (!result.vinos || result.vinos.length < 1) {
      // create empty wine
      result.vinos.push({
        name: 'No results were found',
        thumb: 'wine-bottle.svg'
      });
    }
    // eslint-disable-next-line no-unsafe-finally
    return result;
  }
}
