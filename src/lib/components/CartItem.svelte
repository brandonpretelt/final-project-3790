<script>
	import { cartStore } from '$lib/stores/cartStore';
	export let title, price;
	console.log($cartStore.length);
</script>

<section class="flex flex-col">
	{#if $cartStore.length > 0}
		<h1 class="font-bold">{title ? title : ''}</h1>
		<div class="font-bold text-left">{price ? price : ''}</div>
	{:else}
		<div>Empty</div>
	{/if}
</section>
