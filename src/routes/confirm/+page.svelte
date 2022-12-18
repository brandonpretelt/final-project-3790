<script>
	import Header from '$lib/components/Header.svelte';
	import { cartStore } from '$lib/stores/cartStore';
	import { slide } from 'svelte/transition';
	let items = { title: '', price: '', image: '', id: null };
	setTimeout(() => ($cartStore = [items]), 1000);
</script>

<Header title={'GroceryGo'} />
<div id="button" class="flex justify-between items-center">
	<a href="/" class="link btn m-3">Go back</a>
</div>
<section class="min-h-screen bg-orange-200 m-4">
	<h1 class="text-3xl font-bold">Confirm</h1>

	<div class="grid" transition:slide>
		<p class="text-center text-2xl">Your Order has been confirmed</p>
	</div>
</section>
