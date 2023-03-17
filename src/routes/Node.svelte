<script lang="ts">
  import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
  import { pop } from 'svelte-spa-router';
  import Fa from 'svelte-fa';
  import { newNode } from '$lib/stores/newNode';

  export let params = {};
</script>

<button on:click={pop} class="h-min">
  <Fa icon={faArrowLeftLong} size="2x" />
</button>
<!-- Existing node -->
<form
  action=""
  autocomplete="on"
  class="mt-8 grid h-3/4 justify-items-center sm:grid-cols-1">
  <h1 class="col-span-full text-center text-2xl font-extrabold">
    ID - {$newNode.label}
  </h1>
  <!-- Email -->
  <div class="form-control">
    <label for="email" class="label h-5">
      <span class="label-text text-primary ">Email</span>
    </label>
    <input
      bind:value={$newNode.email}
      id="email"
      type="email"
      class="input-primary input w-80" />
  </div>
  <!-- Username -->
  <div class="form-control">
    <label class="input-group ">
      <span class="bg-primary/30">Username</span>
      <input
        bind:value={$newNode.username}
        type="text"
        autocomplete="on"
        class="input-bordered input " />
    </label>
  </div>
  <!-- Password -->
  <div class="form-control">
    <label class="input-group ">
      <span class="bg-primary/30">Password</span>
      <input
        bind:value={$newNode.password}
        type="password"
        autocomplete="on"
        class="input-bordered input " />
    </label>
  </div>
  <!-- Pin -->
  <div class="form-control">
    <label class="input-group ">
      <span class="bg-primary/30">Pin</span>
      <input
        bind:value={$newNode.pin}
        type="password"
        autocomplete="on"
        class="input-bordered input " />
    </label>
  </div>
  <!-- Phone -->
  <div class="form-control">
    <label class="input-group ">
      <span class="bg-primary/30">phone</span>
      <input
        bind:value={$newNode.phone}
        type="text"
        autocomplete="on"
        class="input-bordered input " />
    </label>
  </div>

  <!-- Notes -->
  <textarea
    bind:value={$newNode.notes}
    class="textarea-bordered textarea textarea-md h-40 w-full max-w-md"
    placeholder="Notes..." />
</form>
