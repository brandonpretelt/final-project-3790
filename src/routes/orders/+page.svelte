<script>
	import Header from '../../lib/components/Header.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	console.log($cartStore);
	let test = [...$cartStore];
	console.log(test);
</script>

<Header title={'GroceryGo'} />
<section class="min-h-screen">
	<div class="bg-orange-200">
		<h2>Your Recent Orders</h2>

		{#each $cartStore as item}
			{item ? item.title : ''}
		{/each}
	</div>
</section>
