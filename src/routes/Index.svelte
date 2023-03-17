<script lang="ts">
  import { nodeStore } from '$lib/stores/node';
  import { push } from 'svelte-spa-router';

  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
  import uuid from 'uuid-browser';
  import Fa from 'svelte-fa';
  let filterText = '';

  const newNode = () => {
    const id = uuid.v4();
    push(`#/node/${id}`);
  };
</script>

<div class="flex flex-col gap-y-8">
  <div class="flex w-full gap-x-4">
    <input
      bind:value={filterText}
      type="text"
      placeholder="filter..."
      class="input-primary input flex-1 rounded-md " />
    <button
      class="btn-primary btn gap-x-2 rounded-md font-extrabold uppercase"
      on:click={newNode}>
      Create new
      <Fa icon={faPlusCircle} size="1.5x" />
    </button>
  </div>
  <div>
    {#await nodeStore.init() then _}
      {#each $nodeStore as node}
        {node.label}
      {:else}
        No nodes :/
      {/each}
      <div class=" dev" />
    {/await}
  </div>
</div>
