<script lang="ts">
  import { faXmark, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { appWindow } from '@tauri-apps/api/window';
  import { theme } from '$lib/stores/theme';
  import ThemeToggle from '$lib/components/theme/ThemeToggleIcon.svelte';
  import Fa from 'svelte-fa';
</script>

<div
  data-tauri-drag-region
  class="bg-base-100 flex h-12 items-center justify-between px-2 shadow-lg">
  <img src="/logo.png" class="h-full py-1 dark:invert" alt="logo" />

  <div class="flex h-full gap-x-3">
    <ThemeToggle theme={$theme} onClick={theme.toggleTheme} />
    <a
      href="https://github.com/Fractal-Tess/project-pm"
      target="_blank"
      class="self-center"
      rel="noopener noreferer">
      <Fa icon={faGithub} size="1.5x" />
    </a>
    <button on:click={appWindow.minimize}>
      <Fa size="1.5x" icon={faWindowMinimize} />
    </button>
    <button on:click={appWindow.close}>
      <Fa size="1.5x" icon={faXmark} />
    </button>
  </div>
</div>
