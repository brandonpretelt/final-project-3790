<script>
	import Header from '$lib/components/Header.svelte';
	import { users } from '$lib/stores/users';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// export let data, form;
	// let products = data.products;

	function navigate() {
		goto('/products');
	}

	let fakeData = {
		products: [
			{
				title: 'Hi people',
				image: 'https://spoonacular.com/productImages/192386-312x231.jpeg'
			}
		]
	};
</script>

<Header title={'GroceryGo'} />

<div class="hero min-h-screen bg-orange-200" class:min-h-screen={!$users.email}>
	<div class="hero-content text-center">
		<div class="max-w-md">
			{#if !$users.email}
				<h1 class="text-5xl font-bold">GroceryGo</h1>
				<h2 class="text-3xl">Get your groceries fast and fresh with GroceryGo.</h2>
				<p class="my-4 text-left text-xl font-normal">
					We are dedicated to providing our customers with the freshest and highest-quality
					groceries, delivered right to their doorstep.
				</p>
				<a href="/auth/signup" class="link btn btn-primary"> Sign Up </a>
			{:else}
				<h1 class="text-3xl">Welcome, {$users.username}!</h1>

				<h2 class="text-2xl">Start your search below</h2>
				<form method="POST" action="/products?/searchProducts" use:enhance={navigate}>
					<div class="form-control">
						<input
							class="input input-bordered"
							type="search"
							placeholder="Search groceries..."
							name="searchProduct"
						/>
					</div>
					<button class="mt-2 btn btn-primary">Search</button>
				</form>
			{/if}
		</div>
	</div>
</div>
<!-- <ProductCard {fakeData} /> -->
<Footer />
