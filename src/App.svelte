<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import Router from './Router.svelte';
  import Layout from '$lib/layouts/base/Layout.svelte';

  $: {
    document.documentElement.setAttribute('data-theme', $theme);
    document.documentElement.classList.value = $theme;
  }
</script>

<Layout>
  <Router />
</Layout>
