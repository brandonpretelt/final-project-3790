<script>
	import Header from '$lib/components/Header.svelte';
	import { users } from '$lib/stores/users';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	// import { setContext } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	export let data;
	// setContext('photodata', data);
	function navigate() {
		goto('/products');
	}

	// 2 CSS animations
	// 1 more api
	// 1 more lifecycle function
</script>

<Header title={'GroceryGo'} photoData={data} />

<div class="hero min-h-screen bg-orange-200">
	<div class="text-center">
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<div class="max-w p-10 m-5 rounded-lg bg-orange-100">
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
<Footer />
