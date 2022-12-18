<script>
	import Header from '../../lib/components/Header.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	import { slide } from 'svelte/transition';
	console.log($cartStore);
	let test = [...$cartStore];
	console.log(test);
	let cartItemId = test[0].id;
	console.log(cartItemId);
</script>

<Header title={'GroceryGo'} />
<div id="button" class="flex justify-between items-center">
	<a href="/" class="link btn m-3">Go back</a>
</div>
<section class="min-h-screen m-4">
	<div class="bg-orange-200">
		<h1 class="text-3xl font-bold">Your Recent Orders</h1>

		<div class="grid grid-cols-3 gap-1" transition:slide>
			{#each $cartStore as { title, price }}
				{#if title}
					<div
						class="rounded-md bg-slate-100 p-3 m-3 flex flex-col items-end justify-start"
						id="gap"
					>
						<h2 class="text-xl font-bold">{title ? title : ''}</h2>
						<h2 class="text-xl">{price ? price : ''}</h2>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
