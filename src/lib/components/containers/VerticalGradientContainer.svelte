<script lang="ts">
  export let background = 'bg-base-100';
</script>

<div
  class="h-full w-full animate-gradient-animation-y rounded-2xl  bg-gradient-to-t from-primary 
  via-secondary to-primary bg-300 p-[2px]">
  <div class="h-full w-full rounded-2xl {background} overflow-hidden p-2">
    <slot />
  </div>
</div>
