<script>
	import Header from '$lib/components/Header.svelte';
	import { users } from '$lib/stores/users';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
	let products = data.products;

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
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">GroceryGo</h1>
			<h2 class="text-3xl">Get your groceries fast and fresh with GroceryGo.</h2>
			{#if !$users.email}
				<p class="my-4 text-left text-xl font-normal">
					We are dedicated to providing our customers with the freshest and highest-quality
					groceries, delivered right to their doorstep.
				</p>
				<a href="/auth/signup" class="link btn btn-primary"> Sign Up </a>
			{:else}
				<p>Welcome, {$users.email}! Start your search below</p>
				<!-- <form>
					<input class="form-control">

					</input>
				</form> -->
			{/if}
		</div>
	</div>
</div>
<!-- <ProductCard {fakeData} /> -->
<Footer />
