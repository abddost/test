<script>
	import { setContext } from 'svelte';
	import ChildComponent from './ChildComponent.svelte';

	const store = {
		count: 0,
		increment: () => {
			store.count += 1;
		}
	};

	setContext('store', store);
</script>

<h1>Parent Component</h1>
<p>Count: {store.count}</p>

<ChildComponent />