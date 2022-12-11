<script>
  import Form from '../lib/components/form.svelte';
  import Switch from '../lib/components/switch.svelte';
  import ResultsPuppeteer from '../lib/components/results-puppeteer.svelte';
  import ResultsPython from '../lib/components/results-python.svelte';
  // import ResultsBackup from '../lib/components/results-backup.svelte';

  let searchTerm;
  let res = null;
  let loading = false;
  let switchValue;
  async function handleSubmit(e) {
    loading = true;
    searchTerm = e.detail;
    if (switchValue === 'Puppeteer') {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ searchTerm }),
        headers: {
          'content-type': 'application/json'
        }
      });
      res = await response.json();
      console.log(res);
    } else {
      const details = 0;
      const lang = 'fr-CH,fr';
      const response = await fetch(
        `http://127.0.0.1:80/wine_info?q=${searchTerm}&details=${searchTerm}&accept_language=${lang};`,
        {
          method: 'POST'
        }
      );
      res = await response.json();
      console.log(res);
    }
    loading = false;
  }
</script>

<div class="container">
  <h1 class="text-left lg:ml-0 text-vivino text-xl mb-4">Scraping Vivino</h1>

  <Switch bind:value={switchValue} options={['Puppeteer', 'Python Api']} />

  <Form on:submit={handleSubmit} />
  <!-- <ResultsBackup /> -->
  {#if loading}
    <div class="mt-16 mx-auto flex justify-center items-center">
      <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
      <p class="ml-4">Getting data from Vivino...</p>
    </div>
  {:else if res}
    {#if switchValue === 'Puppeteer'}
      <ResultsPuppeteer bind:res />
    {:else}
      <ResultsPython bind:res />
    {/if}
  {/if}
</div>
