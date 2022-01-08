import App from './Calendar.svelte';

const app = new App({
	target: document.body,
	props: {
		data: {
			'2021-10-19': 3,
			'2021-10-21': 10,
			'2021-10-24': 9,
			'2021-10-26': 1,
			'2021-10-27': 1,
			'2021-10-28': 1,
			'2021-11-16': 4,
			'2021-11-17': 6,
			'2021-11-19': 1,
			'2021-11-24': 13,
			'2022-01-08': 4,
		}
	}
});

export default app;