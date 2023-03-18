<script lang="ts">
  import { nodeStore } from '$lib/stores/node';

  import CopyText from './CopyText.svelte';
</script>

{#await nodeStore.init() then _}
  {#each $nodeStore as node}
    <a
      href={`#/node/${node.id}`}
      class="block animate-gradient-animation-y rounded-2xl  bg-gradient-to-t from-primary 
  via-secondary to-primary bg-300 p-[2px]">
      <div
        class="overflow-hidden rounded-2xl bg-base-100 p-4 text-lg font-bold">
        <p>{node.label}</p>
        {#if node.email}
          <CopyText text={node.email} />
        {/if}
        {#if node.username}
          <CopyText text={node.username} />
        {/if}
        {#if node.password}
          <CopyText text={node.password} protect={true} />
        {/if}
      </div>
    </a>
  {:else}
    {'No nodes :('}
  {/each}
{/await}
