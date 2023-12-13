<script lang="ts">
  export let test: string = '';
</script>

<svelte:options customElement="my-button" />

<div>
  <button>{test} <slot /></button>
</div>
