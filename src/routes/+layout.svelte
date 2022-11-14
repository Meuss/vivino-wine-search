<script>
  import '../styles/tailwind.css';
  import Logos from '../lib/components/logos.svelte';
</script>

<div
  class="page-wrapper bg-darkblue text-white font-normal flex flex-col justify-start items-center h-full min-h-[100vh] pt-10"
>
  <slot />
</div>
<Logos />

<style lang="postcss">
</style>
