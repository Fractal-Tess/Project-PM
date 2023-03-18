<script lang="ts">
  import CopyButton from './CopyButton.svelte';

  export let text: string;
  export let protect = false;
</script>

<div>
  {#if protect}
    {@const replacer = '*'.repeat(text.length)}
    {replacer}
  {:else}
    {text}
  {/if}
  <CopyButton {text} />
</div>
