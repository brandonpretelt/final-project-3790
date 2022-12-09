<script>
	import Header from '$lib/components/Header.svelte';
	import Test from '$lib/components/Test.svelte';
	import Footer from '$lib/components/Footer.svelte';
	export let data;
	// console.log(data.products);
</script>

<Header />
<div class="hero bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-3xl font-bold">InstaFood</h1>
			<h2 class="text-2xl">Your time is precious, let InstaFood handle the groceries.</h2>
			<p>Your time is precious, let InstaFood handle the groceries.</p>
		</div>
	</div>
</div>
<Test {data} />
<Footer />
