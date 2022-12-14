<script>
	import { enhance } from '$app/forms';
	import { users } from '$lib/stores/users';
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';

	let loginCredentials = {
		email: '',
		password: ''
	};

	function handleSubmit() {
		if ($users.email === loginCredentials.email && $users.password === loginCredentials.password) {
			alert("you're good to go");
		} else {
			alert('try again');
			setTimeout(() => goto('/auth/login'), 40);
		}
	}
</script>

<Header title={'GroceryGo'} />
<section class="hero min-h-screen">
	<div class="card bg-orange-200 flex justify-center items-center">
		<form
			class="p-5 rounded-md
	m-10"
			action="/auth?/login"
			method="POST"
			use:enhance={handleSubmit}
		>
			<h3 class="text-2xl font-bold text-center mb-2">Login</h3>
			<div class="form-control">
				<label for="email" class="text-xl font-bold"> Enter Email: </label>
				<input
					class="input input-bordered mb-4"
					type="email"
					placeholder="email"
					name="email"
					bind:value={loginCredentials.email}
				/>
			</div>
			<div class="form-control">
				<label for="password" class="text-xl font-bold"> Enter Password: </label>
				<input
					class="input input-bordered mb-4"
					type="password"
					placeholder="enter password"
					name="password"
					bind:value={loginCredentials.password}
				/>
			</div>
			<div>
				<button class="btn btn-primary w-full">Login!</button>
			</div>
			<div class="text-center">
				<small>
					Don't have an account? <a class="link" href="/auth/signup">Sign up here</a>
				</small>
			</div>
		</form>
	</div>
</section>
