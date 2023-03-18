<script lang="ts">
  import { clipboard } from '@tauri-apps/api';
  import { faCopy } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  export let type: 'email' | 'text' | 'tel' | 'password';
  export let label: string;
  export let value: string;

  let coppied = false;
  const toClipboard = () => {
    setTimeout(() => (coppied = false), 500);
    coppied = true;
    clipboard.writeText(value);
  };
</script>

<div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <div>
    <label class="label h-5 ">{label}</label>
    {#if type === 'email'}
      <input bind:value type="email" class="input-primary input w-80" />
    {:else if type === 'text'}
      <input bind:value type="text" class="input-primary input w-80" />
    {:else if type === 'password'}
      <input bind:value type="password" class="input-primary input w-80" />
    {:else if type === 'tel'}
      <input bind:value type="tel" class="input-primary input w-80" />
    {/if}
    <button
      on:click={toClipboard}
      type="button"
      class="scale ml-2 transition-transform duration-500"
      class:scale-125={coppied}
      class:text-primary={coppied}>
      <Fa icon={faCopy} size="1.5x" />
    </button>
  </div>
</div>
