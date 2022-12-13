<script>
	import Header from '$lib/components/Header.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	console.log($cartStore.title);
</script>

<Header title={'GroceryGo'} />
<div class="bg-orange-200">This is the checkout page!</div>
<div>
	{#each $cartStore as { title, price, image }}
		{title}{price}<img src={image} alt={title} />
	{/each}
</div>
