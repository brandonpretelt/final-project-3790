<script>
	export let data;
	console.log(data);

	// regex removal borrowed and modified from
	// https://stackoverflow.com/a/1499916
	function getRidOfTags(text) {
		const regex = /(&([^AZaz]+);)/gi;
		let result = text.replace(regex, '');
		return result;
	}
</script>

<section class="min-h-screen bg-orange-200 grid grid-cols-2">
	<div>
		<figure>
			<img src={data.image} alt={data.title} />
		</figure>
	</div>
	<div>
		<h1 class="text-2xl font-bold text-neutral">{data.title}</h1>
		{#if data.price === 0 || data.price === undefined}
			<span class="text-lg font-bold text-neutral"
				>${Math.floor(Math.random() * 10 + 1)}{Math.random().toFixed(2)}</span
			>
		{:else}
			<span class="text-lg font-bold text-neutral">${data.price}</span>
		{/if}
		{#if data.generatedText === undefined || data.generatedText === null}
			<p class="my-4 leading-loose text-neutral">{@html getRidOfTags(data.description)}</p>
		{:else}
			<p class="my-4 leading-loose text-neutral">{@html getRidOfTags(data.generatedText)}</p>
		{/if}
	</div>
</section>
