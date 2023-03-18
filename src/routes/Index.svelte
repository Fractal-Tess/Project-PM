<script lang="ts">
  import { nodeStore } from '$lib/stores/node';

  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import NodeCollection from '$components/NodeCollection.svelte';

  let filter = '';
  $: nodeStore.setFilter(filter);
</script>

<div class="flex flex-col gap-y-8">
  <div class="flex w-full gap-x-4">
    <input
      bind:value={filter}
      type="text"
      placeholder="filter..."
      class="input-primary input flex-1 rounded-md " />
    <a
      href="#/node/"
      class="btn-primary btn gap-x-2 rounded-md font-extrabold uppercase">
      Create new
      <Fa icon={faPlusCircle} size="1.5x" />
    </a>
  </div>
  <div class="flex flex-wrap gap-4">
    {#await nodeStore.init() then _}
      <NodeCollection />
    {/await}
  </div>
</div>
