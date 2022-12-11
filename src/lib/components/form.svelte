<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function isFormValid(data) {
    if (!isRequiredFieldValid(data.searchTerm)) {
      return false;
    }
    return true;
  }
  function isRequiredFieldValid(value) {
    return value != null && value !== '';
  }

  function onSubmit(e) {
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    if (isFormValid(data)) {
      dispatch('submit', data.searchTerm);
    } else {
      console.log('Invalid Form');
    }
  }
</script>

<form on:submit|preventDefault={onSubmit} class="grid grid-cols-12 gap-8">
  <div class="col-start-1 col-span-3 lg:col-start-1 lg:col-span-6">
    <label for="searchTerm" class="block text-lg font-medium text-gray-400 mb-4">Search for a wine</label>
    <div class="relative mt-1 rounded-md shadow-sm">
      <input
        type="text"
        name="searchTerm"
        id="price"
        class="rounded-md px-4 py-2 sm:text-sm text-gray-800 text-bold w-full"
        placeholder="Xavier Vignon"
      />
    </div>
  </div>

  <div class="col-start-4 col-span-4 lg:col-start-7 flex items-end">
    <button
      type="submit"
      class="relative rounded-md border border-transparent bg-vivino py-2 pl-12 pr-4 text-sm font-medium text-white hover:bg-vivinodark"
      formaction="?/search"
    >
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      Search
    </button>
  </div>
</form>
