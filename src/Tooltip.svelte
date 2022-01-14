<script>
  import { fade } from "svelte/transition";
  export let desc;
  export let visible;
</script>

{#if visible}
  <div class="tooltip" transition:fade>
    {desc}
    <div class="arrow" />
  </div>
{/if}

<style>
  .tooltip {
    display: block;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    min-width: 10px;
    width: max-content;
    padding: 10px;
    font-size: 12px;
    line-height: 1.2;
    background: #303133;
    border-radius: 4px;
    color: #fff;
  }
  .arrow {
    position: absolute;
    display: block;
    bottom: -6px;
    left: 50%;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 6px;
    border-top-color: #303133;
    border-bottom-width: 0;
    transform: translateX(-50%);
  }
</style>
