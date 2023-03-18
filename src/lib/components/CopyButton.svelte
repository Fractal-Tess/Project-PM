<script lang="ts">
  import { faCopy } from '@fortawesome/free-solid-svg-icons';
  import { clipboard } from '@tauri-apps/api';
  import Fa from 'svelte-fa';

  export let size = '1x';
  export let text: string;
  let coppied = false;

  const toClip = () => {
    clipboard.writeText(text);
    coppied = true;
    setTimeout(() => (coppied = false), 500);
  };
</script>

<button
  on:click={toClip}
  type="button"
  class="scale ml-2 transition-transform duration-500"
  class:scale-125={coppied}
  class:text-primary={coppied}>
  <Fa icon={faCopy} {size} />
</button>
