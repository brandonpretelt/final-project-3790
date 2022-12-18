<script>
	import Header from '$lib/components/Header.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	console.log($cartStore.title);
	let prices = [];
	$cartStore.forEach((item) => {
		prices = [item.price];
	});
	$: sum = prices.reduce((prev, curr) => prev + curr, 0);
	function placeOrder() {
		goto('/confirm');
	}
</script>

<Header title={'GroceryGo'} />
<div id="button" class="flex justify-between items-center">
	<a href="/" class="link btn m-3">Go back</a>
	<button on:click={placeOrder} class="link btn m-3">Place Order</button>
</div>
<section class="min-h-screen bg-orange-200 m-4">
	<h1 class="text-3xl font-bold">Checkout</h1>
	<div id="total" />
	<div class="grid grid-cols-3 gap-1" transition:slide>
		{#each $cartStore as { title, price, image }}
			{#if title}
				<div class="rounded-md bg-slate-100 p-3 m-3 flex flex-col items-end justify-start" id="gap">
					<h2 class="text-xl font-bold">{title ? title : ''}</h2>
					<h2 class="text-xl">{price ? price : ''}</h2>
					<div class="mt-auto">
						<img src={image} alt={title} />
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	#gap {
		margin: 1em;
	}
</style>
