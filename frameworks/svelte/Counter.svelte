<script>
	import { renderLog } from "$lib";

  renderLog("Counter.svelte");
  //runes
  let count = $state(1);
  let double = $derived(count * 2);

  $effect(() => console.log(`[count] changed to: ${count}`))

  const increment = () => count++;

</script>

<div class="counter">
  <p>{count} ({double})</p>
  <button onclick={increment}>Increment</button>
</div>
