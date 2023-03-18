<script lang="ts">
  import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
  import { pop } from 'svelte-spa-router';
  import Fa from 'svelte-fa';
  import { nodeCreationStore } from '$lib/stores/nodeCreation';
  import Input from '$components/Input.svelte';
  import { nodeStore } from '$lib/stores/node';

  export let params: { id: string };

  console.log(params);
</script>

<button on:click={pop} class="h-min">
  <Fa icon={faArrowLeftLong} size="2x" />
</button>
{#if params.id}
  <!-- We are viewing & editing a node -->
  {params.id}
{:else}
  <!-- We are creating node -->
  has no params
{/if}

<!-- 
<form
  action=""
  autocomplete="on"
  class="mt-8 grid gap-y-4 justify-items-center sm:grid-cols-1">
  {$nodeCreationStore.id}
  <h1 class="col-span-full text-center text-2xl font-extrabold">
    <input
      bind:value={$nodeCreationStore.label}
      type="text"
      class="input input-bordered rounded-md " />
  </h1>
  <Input label="Email" type={'email'} bind:value={$nodeCreationStore.email} />
  <Input
    label="Username"
    type={'text'}
    bind:value={$nodeCreationStore.username} />
  <Input
    label="Password"
    type={'password'}
    bind:value={$nodeCreationStore.password} />
  <Input label="Pin" type={'password'} bind:value={$nodeCreationStore.pin} />
  <Input label="Phone" type={'tel'} bind:value={$nodeCreationStore.phone} />

  <textarea
    bind:value={$nodeCreationStore.notes}
    class="textarea-bordered textarea textarea-md h-40 w-full max-w-md"
    placeholder="Notes..." />
</form> -->
