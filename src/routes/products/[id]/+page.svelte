<script>
	import Header from '$lib/components/Header.svelte';
	export let data;
	$: console.log(data);
</script>

<Header title={'GroceryGo'} />
<a href="/" class="link btn m-3">Go to product search</a>
<div class="card flex justify-center">
	<div class="card-content flex flex-col items-center">
		<div class="flex flex-col items-center text-centermy-20 w-8/12 p-5">
			<figure>
				<img src={data.image} alt={data.title} />
			</figure>

			<h1 class="text-3xl font-bold text-neutral">{data.title}</h1>
			{#if data.price === 0}
				<span class="text-2xl font-bold text-neutral">$10.00</span>
			{:else}
				<span class="text-2xl font-bold text-neutral">${data.price}</span>
			{/if}

			<p class="card card-body w-3/4 text-neutral">{@html data.generatedText}</p>
			<button class="btn btn-primary">Add to cart</button>
		</div>
	</div>
</div>
