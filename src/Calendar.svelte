<script>
  import dayjs from "dayjs";
  import isToday from "dayjs/plugin/isToday";
  import Week from "./Week.svelte";
  dayjs.extend(isToday);

  export let data;

  function getDays() {
    const forwardNum = 7;
    const backwardNum = 11 * 7;
    const days = [];
    for (let i = 1; i <= forwardNum; i++) {
      const date = dayjs()
        .add(i - 1, "d")
        .format("YYYY-MM-DD");
      const heat = data[date] || 0;
      days.push({
        date,
        heat,
        today: dayjs().add(i - 1, "d").isToday(),
      });
    }
    for (let i = 1; i <= backwardNum; i++) {
      const date = dayjs().subtract(i, "d").format("YYYY-MM-DD");
      const heat = data[date] || 0;
      days.unshift({
        date,
        heat,
        today: false,
      });
    }
    return days;
  }
  const days = getDays();
  const weeks = [];
  days.forEach((day, i) => {
    const index = Math.floor(i / 7);
    if (!weeks[index]) weeks[index] = [];
    weeks[index].push(day);
  });
</script>

<div class="calendar">
  {#each weeks as days}
    <Week {days} />
  {/each}
</div>

<style>
  .calendar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
