<script>
  import Form from '../lib/components/form.svelte';
  import Results from '../lib/components/results.svelte';
  // import ResultsBackup from '../lib/components/results-backup.svelte';

  let searchTerm;
  let res = null;
  let loading = false;
  async function handleSubmit(e) {
    loading = true;
    searchTerm = e.detail;
    const response = await fetch('/', {
      method: 'POST',
      body: JSON.stringify({ searchTerm }),
      headers: {
        'content-type': 'application/json'
      }
    });

    res = await response.json();
    loading = false;
  }
</script>

<div class="container">
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
    <Results bind:res />
  {/if}
</div>
