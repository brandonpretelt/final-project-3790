<script>
	export let title, price;
</script>

<section class="flex flex-col">
	{#if title === undefined && price === undefined}
		<div>Cart is empty</div>
	{:else}
		<h1 class="font-bold">{title}</h1>
		<div class="font-bold text-left">${price}</div>
	{/if}
</section>
