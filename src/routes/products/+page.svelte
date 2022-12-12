<script>
	import Header from '$lib/components/Header.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	export let form;
	console.log(form);
</script>

<Header title={'GroceryGo'} />
<ProductCard data={form} />
