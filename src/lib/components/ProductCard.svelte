<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let data;
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<section class="min-h-screen" in:fly={{ x: -500 }}>
		<div class="card card-body grid grid-cols-4">
			{#if data}
				{#each data.products as { title, image, id } (id)}
					<div class="rounded-lg card-content bg-slate-700">
						<!-- svelte-ignore a11y-missing-attribute -->
						<figure class="p-3 w-full">
							<img class="rounded-sm" src={image} />
						</figure>
						<div class="text-white text-center p-3">{title}</div>
						<div class="flex justify-center m-3">
							<a href={`../products/${id}`} class="box btn bg-orange-400 mb-3">
								<div>View Details</div>
							</a>
						</div>
					</div>
				{/each}
			{:else}
				<div>welp...</div>
			{/if}
		</div>
	</section>
{/if}
