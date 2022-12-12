<script>
	import { browser } from '$app/environment';
	import { users } from '$lib/stores/users';
	import Cart from './Cart.svelte';
	export let title;
	export let hidden;
	function show() {
		if (hidden === false) hidden;

		hidden = !hidden;
	}

	let PATH;
	$: if (browser) {
		PATH = window.location.pathname;
		console.log(PATH);
	}
</script>

<div class="navbar bg-orange-300">
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
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				{#if PATH === '/auth/signup'}
					<a href="/auth/login" class="link btn btn-outline">Login</a>
				{:else}
					<a href="/auth/signup" class="link btn btn-outline">Sign Up</a>
				{/if}
			{:else}
				<!-- svelte-ignore a11y-missing-attribute -->

				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://placeimg.com/80/80/people" />
					</div>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a href="/profile" class="justify-between">
							{#if $users}
								{$users.username}
							{:else}
								<span>Hi stranger</span>
							{/if}
							<!-- <span class="badge">New</span> -->
						</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a href="/orders">Orders</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li><a href="/auth/login">Logout</a></li>
				</ul>
			{/if}
		</div>
	</div>
</div>
