<script lang="ts">
  import Router from 'svelte-spa-router';
  import Index from '$routes/Index.svelte';
  import Node from '$routes/Node.svelte';

  const routes = {
    '/': Index,
    '/node/:id': Node
  };
</script>

<Router {routes} />
