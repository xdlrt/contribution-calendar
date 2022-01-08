<script>
	import dayjs from "dayjs";
	import isToday from "dayjs/plugin/isToday";
	import Week from "./Week.svelte";
	dayjs.extend(isToday);

	export let data;

	function getDays() {
		const num = 12 * 7 - 1;
		const days = [];
		for (let i = 0; i <= num; i++) {
			if (i === num) {
				const date = dayjs().add(1, "d").format("YYYY-MM-DD");
				const heat = data[date] || 0;
				days.push({ date, heat, today: false });
				continue;
			}
			const date = dayjs().subtract(i, "d").format("YYYY-MM-DD");
			const heat = data[date] || 0;
			days.unshift({
				date,
				heat,
				today: dayjs().subtract(i, "d").isToday(),
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
		width: 240px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
