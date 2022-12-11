<script>
  import Svelte from '$lib/images/svelte.svelte';
  import Puppeteer from '$lib/images/puppeteer.svelte';
  import Vivino from '$lib/images/vivino.svelte';
  import Python from '$lib/images/python.svelte';
</script>

<div class="absolute logos top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 max-w-7xl pointer-events-none z-0">
  <div class="flex justify-start align-center gap-12">
    <Svelte />
    <Puppeteer />
    <Python />
    <Vivino />
  </div>
</div>

<style lang="postcss">
  .logos {
    & :global(svg) {
      filter: saturate(0) opacity(0.04);
      width: 15rem;
      height: 15rem;
    }
  }
</style>
