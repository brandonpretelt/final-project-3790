<script>
	import Header from '$lib/components/Header.svelte';
	import Product from '$lib/components/Product.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	import { setContext } from 'svelte';
	export let data;
	let items = { title: data.title, price: data.price, id: data.id, image: data.image };

	let addToCart = () => {
		$cartStore = [...$cartStore, items];
		setContext('cartProducts', $cartStore);
	};
</script>

<Header title={'GroceryGo'} />
<a href="/" class="link btn m-3">Go to product search</a>
<div class="card flex justify-center">
	<div class="card-content flex flex-col items-center">
		<div class="flex flex-col items-center text-centermy-20 w-8/12 p-5">
			<Product title={$cartStore.title} price={$cartStore.price} id={$cartStore.id} {data} />

			<button on:click={addToCart} class="btn btn-primary">Add to cart</button>
		</div>
	</div>
</div>
