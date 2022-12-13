<script>
	import Header from '../../lib/components/Header.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	console.log($cartStore);
</script>

<Header title={'GroceryGo'} />
<div class="bg-orange-200">
	<h2>Your Recent Orders</h2>
	{#each [$cartStore] as item}
		{item.title}
	{/each}
</div>
