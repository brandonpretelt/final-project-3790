<script>
	import { cartStore } from '$lib/stores/cartStore';
	export let title, price;
	console.log($cartStore);
	console.log(title, price);
</script>

<section class="flex flex-col">
	<div>
		{#if title !== '' || price !== ''}
			<h1 class="font-bold">{title ? title : ''}</h1>
			<div class="font-bold text-left">{price ? `$${price}` : ''}</div>
		{/if}
	</div>
</section>
