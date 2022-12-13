<script>
	import Product from './Product.svelte';
	import { cartStore } from '$lib/stores/cartStore';

	export let hidden;
	hidden = !false;
	console.log($cartStore);
	let items;
	items = $cartStore;
	console.log(items, '<---');
	/* 	let cartItems = {
		
		title,
		price	}
	function handleSignup() {
		return async ({ update }) => {
			$cartStore = signUpCredentials;
			update();
		};
	} */
</script>

<div class="card absolute right-1 top-20 bg-slate-900 hidden z-10" class:hidden>
	<div class="card-content  text-white rounded-md p-3 flex flex-col justify-center items-center">
		<!-- 		{#if items.length === 0}
			<div class="p-4">
				<span>No items</span>
			</div>
		{:else} -->
		<ul class="menu w-56 rounded-box">
			<!-- {#each items as item} -->
			<li class="rounded-md">
				<Product title={items.title} price={items.price} />
				<!-- <div>${item.price} - {item.title}</div> -->
			</li>
			<!-- {/each} -->
		</ul>
		<button on:click={() => console.log(items)}>Click me please for testing..</button>
		<!-- <a href="/checkout" on:click={() => (hidden = !hidden)} class="btn">Go to Checkout</a> -->
		<!-- {/if} -->
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
