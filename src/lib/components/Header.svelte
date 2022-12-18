<script>
	import { browser } from '$app/environment';
	import { users } from '$lib/stores/users';
	import { cartStore } from '$lib/stores/cartStore';
	import { getContext } from 'svelte';

	import Cart from './Cart.svelte';

	export let title;
	export let hidden;
	export let photoData;
	let randomProfilePhoto;

	if (photoData) {
		randomProfilePhoto = photoData[0];
	}
	// console.log(randomProfilePhoto);
	function show() {
		if (hidden === false) hidden;

		hidden = !hidden;
	}

	function clearStore() {
		$cartStore = {};
	}

	// TODO:  for photos from unsplash get random photos and then use map to create a new photos object with the following
	// properties: query, orientation, count, content_filter
	// and then filter by content_filter to only get a high content filter

	// for prices, map new object with updated price property --> if price 0 then custom_price (between 0 and 100), else use provided price data.price

	let PATH;
	$: if (browser) {
		PATH = window.location.pathname;
	}
</script>

<div class="navbar bg-orange-200">
	<div class="flex-1">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a href="/" class="btn btn-ghost normal-case text-xl">{title}</a>
	</div>
	<div class="flex-none gap-2">
		{#if $users.email}
			<button on:click={show} class="btn bg-transparent border-none hover:bg-transparent">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					hover:shadow-sm
					class="w-8"
					src="https://img.icons8.com/small/96/null/shopping-bag.png"
				/>
			</button>
			<Cart {hidden} {show} />
		{/if}
		<div class="dropdown dropdown-end">
			{#if PATH === '/auth/signup' || PATH === '/auth/login'}
				{#if PATH === '/auth/signup'}
					<a href="/auth/login" class="link btn btn-outline">Login</a>
				{:else}
					<a href="/auth/signup" class="link btn btn-outline">Sign Up</a>
				{/if}
			{:else}
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- avatar section -->
						<!-- <img
							src={photoData
								? randomProfilePhoto.urls.regular
								: 'https://img.icons8.com/small/96/null/shopping-bag.png'}
						/> -->
						<img src="https://img.icons8.com/small/96/null/shopping-bag.png" />
					</div>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<a href="/profile" class="justify-between">
							{#if $users}
								{$users.username}
							{:else}
								<span>Hi stranger</span>
							{/if}
						</a>
					</li>
					<li><a href="/orders">Orders</a></li>
					<li><a href="/auth/login">Logout</a></li>
				</ul>
			{/if}
		</div>
	</div>
</div>
