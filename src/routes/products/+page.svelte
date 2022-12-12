<script>
	import Header from '$lib/components/Header.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	export let form;
	// use context api to pass down id?
</script>

<Header title={'GroceryGo'} />
<ProductCard data={form} />
