<script>
	import { cartStore } from '$lib/stores/cartStore';

	export let data;
	console.log($cartStore);
</script>

{#if data}
	<figure>
		<img src={data.image} alt={data.title} />
	</figure>

	<h1 class="text-3xl font-bold text-neutral">{data.title}</h1>
	{#if data.price === 0}
		<span class="text-2xl font-bold text-neutral">$10.00</span>
	{:else}
		<span class="text-2xl font-bold text-neutral">${data.price}</span>
	{/if}

	<p class="card card-body w-3/4 text-neutral">{@html data.generatedText}</p>
{:else}
	{#each [$cartStore] as item}
		{#if item}
			<span>{item.title}</span>
		{:else}
			<div>No items</div>
		{/if}
	{/each}
{/if}
