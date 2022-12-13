<script>
	import Header from '$lib/components/Header.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	console.log($cartStore.title);
</script>

<Header title={'GroceryGo'} />
<div class="bg-orange-200">This is the checkout page!</div>

{#if $cartStore}
	<img src={$cartStore.image} alt={$cartStore.title} />
	{$cartStore.title}
	{$cartStore.price}
{/if}
