// https://svelte.dev/repl/dd6754a2ad0547c5b1c1ea37c0293fef?version=3.46.1
import Tooltip from './Tooltip.svelte';

export function tooltip(element) {
  let tooltipComponent;

  function mouseEnter(event) {
    const desc = element.getAttribute('data-desc');
    const { top, left } = event.target.getBoundingClientRect();
    tooltipComponent = new Tooltip({
      props: {
        desc: desc,
        x: left + 7,
        y: top - 46,
      },
      target: document.body,
    });
  }

  function mouseLeave() {
    tooltipComponent.$destroy();
  }

  element.addEventListener('mouseenter', mouseEnter);
  element.addEventListener('mouseleave', mouseLeave);

  return {
    destroy() {
      element.removeEventListener('mouseenter', mouseEnter);
      element.removeEventListener('mouseleave', mouseLeave);
    }
  }
}