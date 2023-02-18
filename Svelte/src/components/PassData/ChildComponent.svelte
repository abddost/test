<script>
	import { getContext } from 'svelte';

	const store = getContext('store');
</script>

<h2>Child Component</h2>
<button on:click={store.increment}>Increment</button>