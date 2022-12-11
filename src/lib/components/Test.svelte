<script>
	export let data;
</script>

<div class="card card-body grid grid-cols-4">
	{#if data}
		{#each data.products as { title, image }}
			<div class="card-content bg-slate-700">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src={image} />
				<div>{title}</div>
			</div>
		{/each}
	{:else}
		<div>welp...</div>
	{/if}
</div>
