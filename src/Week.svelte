<script>
  import Day from "./Day.svelte";
  export let days;
</script>

<div class="week">
  {#each days as day}
    <Day {...day} />
  {/each}
</div>

<style>
</style>
