<script>
  export let options = [];
  export let value = 'Python Api';
  const uniqueID = Math.floor(Math.random() * 100);
</script>

<div class="switch cursor-pointer mb-5">
  <div role="radiogroup" class="group-container" aria-labelledby={`label-${uniqueID}`} id={`group-${uniqueID}`}>
    {#each options as option}
      <input type="radio" id={`${option}-${uniqueID}`} value={option} bind:group={value} />
      <label class="cursor-pointer text-md font-medium text-gray-400" for={`${option}-${uniqueID}`}>
        {option}
      </label>
    {/each}
  </div>
</div>

<style>
  :root {
    --color1: #ba1628;
    --color2: #8e081a;
  }

  .switch .group-container {
    border: none;
    padding: 0;
    white-space: nowrap;
  }

  .switch label {
    display: inline-block;
    position: relative;
    z-index: 2;
    user-select: none;
  }

  .switch input {
    opacity: 0;
    position: absolute;
  }

  .switch label:first-of-type {
    padding-right: 5em;
  }

  .switch label:last-child {
    margin-left: -5em;
    padding-left: 5em;
  }

  .switch:focus-within label:first-of-type:after {
    box-shadow: 0 0px 8px var(--color2);
    border-radius: 1.5em;
  }

  .switch label:first-of-type:before,
  .switch label:first-of-type:after {
    content: '';
    height: 1.25em;
    overflow: hidden;
    position: absolute;
    vertical-align: middle;
  }

  .switch label:first-of-type:before {
    border-radius: 100%;
    z-index: 2;
    position: absolute;
    width: 1.2em;
    height: 1.2em;
    background: #fff;
    top: 0.2em;
    right: 1.2em;
    transition: transform 0.3s;
  }

  .switch label:first-of-type:after {
    background: var(--color2);
    border-radius: 1em;
    margin: 0 1em;
    transition: background 0.2s ease-in-out;
    width: 3em;
    height: 1.6em;
  }

  .switch input:first-of-type:checked ~ label:first-of-type:after {
    background: var(--color1);
  }

  .switch input:first-of-type:checked ~ label:first-of-type:before {
    transform: translateX(-1.4em);
  }

  .switch input:last-of-type:checked ~ label:last-of-type {
    z-index: 1;
  }

  .switch input:focus {
    box-shadow: 0 0px 8px var(--color2);
    border-radius: 1.5em;
  }
</style>
