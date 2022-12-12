<script>
	// 	export let details;
	export let hidden;
	hidden = !false;
	export let items = [];
	/* 	let cartItems = {
		title,
		price	}
	function handleSignup() {
		return async ({ update }) => {
			$cartStore = signUpCredentials;
			update();
		};
	} */
</script>

<div class="card absolute right-1 top-20 bg-slate-900 hidden z-10" class:hidden>
	<div class="card-content  text-white rounded-md p-3 flex flex-col justify-center items-center">
		{#if items.length === 0}
			<div class="p-4">
				<span>No items</span>
			</div>
		{:else}
			<ul class="menu w-56 rounded-box">
				<li class="rounded-md">
					<div>${item.price} - {item.title}</div>
				</li>
			</ul>
			<a href="/checkout" on:click={() => (hidden = !hidden)} class="btn">Go to Checkout</a>
		{/if}
	</div>
</div>

<style>
	li {
		border-bottom: solid 1px white;
	}
	li:last-child {
		border: none;
	}
</style>
