<script>
  export let res;
  let maxChars = 40;
  function truncate(text, maxChars) {
    const start = text.slice(0, maxChars);
    if (start.length < text.length) {
      return start + '…';
    } else {
      return text;
    }
  }
</script>

{#if res.length !== 0}
  <div class="grid grid-cols-4 gap-16 my-16 lg:grid-cols-3 lg:gap-12 xs:grid-cols-2 xs:gap-8 xxs:grid-cols-1 xxs:gap-4">
    {#each res.vinos as item}
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-darkblue p-8">
        <div class="aspect-square bg-contain bg-no-repeat bg-center" style="background-image: url({item.thumb});" />
        <div class="py-4">
          <div class="font-bold text-xl">{truncate(item.name, maxChars)}</div>
        </div>
        {#if item.region && item.country}
          <div class="font-light text-md mb-2">{item.region} - {item.country}</div>
        {/if}
        <div class="flex items-center -ml-1">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><title>Rating star</title><path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            /></svg
          >
          <p class="ml-2 text-sm font-bold">{item.average_rating ?? 0}</p>
          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full" />
          <p class="text-sm font-medium text-gray-900">
            {item.ratings ?? 0} ratings
          </p>
        </div>
      </div>
    {/each}
  </div>
{/if}
