<script>
	let count = 0;

	function handleClick() {
		count += 1;
		if (count === 10) {
			count = 0;
		}
	}
</script>

<button on:click={handleClick}>
	Click me {count}
</button>