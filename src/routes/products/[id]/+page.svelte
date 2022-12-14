<script>
	import Header from '$lib/components/Header.svelte';
	import Product from '$lib/components/Product.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	import { fly } from 'svelte/transition';
	export let data;
	let visible = false;
	let items = { title: data.title, price: data.price, id: data.id, image: data.image };

	let addToCart = () => {
		if (items.length > 0 || items !== undefined || items !== null) {
			$cartStore = [...$cartStore, items];
		}
		visible = true;
		setTimeout(() => {
			visible = false;
		}, 1000);
	};
</script>

<Header title={'GroceryGo'} />
{#if visible}
	<div class="toast toast-top toast-end" in:fly={{ y: -20 }}>
		<div class="alert alert-info">
			<div>
				<span>Item added to cart</span>
			</div>
		</div>
	</div>
{/if}
<section class="min-h-screen bg-orange-200">
	<div id="button" class="flex justify-between items-center">
		<a href="/" class="link btn m-3">Go to product search</a>
	</div>
	<div class="card flex justify-center">
		<div class="card-content flex flex-col items-center">
			<div class="flex flex-col items-center p-5">
				<div class="ml-auto mb-8">
					<button on:click={addToCart} class="btn btn-primary justify-self-end">Add to cart</button>
				</div>
				<Product title={$cartStore.title} price={$cartStore.price} id={$cartStore.id} {data} />
			</div>
		</div>
	</div>
</section>
