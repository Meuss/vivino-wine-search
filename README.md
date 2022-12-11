# Vivino wine search

> built with [SvelteKit](https://kit.svelte.dev/)

A small POC for scraping wine data from [Vivino](https://www.vivino.com/). For the moment only available for local dev.

## Tools

- [SvelteKit](https://kit.svelte.dev/) for the frontend
- [Puppeteer](https://pptr.dev/) for scraping
- [WineInfo Python API](https://github.com/paulbmiller/wine_info) for scraping (thanks Paul!)
- [Vite](https://vitejs.dev/) for bundling
- [TailwindCSS](https://tailwindcss.com/) for styling

## Developing

```bash
# install dependencies
npm i
# develop locally
npm run dev

```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
