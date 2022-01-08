import Calendar from './Calendar.svelte';

const config = window.__CONTRIBUTION_CALENDAR__;

if (config) {
  new Calendar({
    target: config.target,
    props: config.props,
  });
}
