<script>
  import { tooltip } from "./tooltip";
  export let today;
  export let heat;
  export let desc;

  function getClassName() {
    const cls = `day${today ? " today" : ""}`;
    if (heat > 9) return `${cls} dark_green`;
    else if (heat > 4) return `${cls} green`;
    else if (heat > 0) return `${cls} light_green`;
    else return `${cls}`;
  }
</script>

<div class={getClassName()} data-desc={desc} use:tooltip />

<style>
  .day {
    position: relative;
    width: 12px;
    height: 12px;
    background: #efefef;
    color: #d3ecdd;
    border: 1px solid transparent;
    border-radius: 2px;
    margin-bottom: 4px;
    cursor: pointer;
  }
  .day.green {
    background: #8ddeb5;
  }
  .day.light_green {
    background: #d3ecdd;
  }
  .day.dark_green {
    background: #55bb8e;
  }
  .day.today {
    border-color: #55bb8e;
  }
</style>
