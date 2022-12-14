<script>
	import { cartStore } from '$lib/stores/cartStore';
	export let title, price;
	console.log($cartStore.length);
</script>

<section class="flex flex-col">
	{#if $cartStore.length > 0 && title !== undefined}
		<h1 class="font-bold">{title}</h1>
		<div class="font-bold text-left">${price ? price : Math.floor(Math.random() * 10)}</div>
	{/if}
</section>
