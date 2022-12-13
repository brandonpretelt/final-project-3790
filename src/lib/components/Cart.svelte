<script>
	// import Product from './Product.svelte';
	import CartItem from './CartItem.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	import { get } from 'svelte/store';
	import { getContext } from 'svelte';

	export let hidden;
	hidden = !false;
	/* 	let currentCartItems;
	if (getContext('cartProducts') !== undefined) {
		currentCartItems = [getContext('cartProducts'), $cartStore];
	}
	let items = []; */
	// items = [...currentCartItems, $cartStore];
	items.push($cartStore);
</script>

<div class="card absolute right-1 top-20 bg-slate-900 hidden z-10" class:hidden>
	<div class="card-content  text-white rounded-md p-3 flex flex-col justify-center items-center">
		<ul class="menu w-56 rounded-box cursor-default">
			{#each [$cartStore] as item}
				<li class="rounded-md cursor-default">
					<CartItem title={item.title} price={item.price} />
				</li>
			{/each}
		</ul>
		<!-- <button on:click={() => console.log(currentCartItems)}>Test</button> -->
		<a href="/checkout" on:click={() => (hidden = !hidden)} class="btn">Go to Checkout</a>
	</div>
</div>

<style>
	li {
		border-bottom: solid 1px white;
	}
	li:last-child {
		border: none;
	}
</style>
