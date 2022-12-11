<script>
	import { enhance } from '$app/forms';
	import { users } from '$lib/stores/users';
	import Header from '$lib/components/Header.svelte';
	let signUpCredentials = {
		email: '',
		password: '',
		confirmPassword: ''
	};
	function handleSignup() {
		let { password, confirmPassword } = signUpCredentials;
		if (password !== confirmPassword) {
			alert('try again');
		}

		return async ({ update }) => {
			$users = signUpCredentials;
			update();
		};
	}
</script>

<Header />
<div class="card flex justify-center items-center">
	<form
		class="bg-green-600 p-5 rounded-md
        m-10"
		action="/auth?/signup"
		method="POST"
		use:enhance={handleSignup}
	>
		<h3 class="text-2xl font-bold text-center mb-2">Sign Up</h3>
		<div class="form-control">
			<label for="email" class="text-xl font-bold"> Enter Email: </label>
			<input
				class="input input-bordered mb-4"
				type="email"
				placeholder="email"
				name="email"
				bind:value={signUpCredentials.email}
			/>
		</div>
		<div class="form-control">
			<label for="password" class="text-xl font-bold"> Enter Password: </label>
			<input
				class="input input-bordered mb-4"
				type="password"
				placeholder="enter password"
				name="password"
				bind:value={signUpCredentials.password}
			/>
		</div>
		<div class="form-control">
			<label for="confirmPassword" class="text-xl font-bold"> Confirm Password: </label>
			<input
				class="input input-bordered mb-4"
				type="password"
				placeholder="confirm password"
				name="confirmPassword"
				bind:value={signUpCredentials.confirmPassword}
			/>
		</div>
		<div class="mx-auto text-center">
			<button class="btn btn-secondary w-full">
				<span class="text-white font-bold">Sign Up!</span>
			</button>
		</div>
		<div class="text-center">
			<small>
				Have an account? <a class="link" href="/auth/login">Login here</a>
			</small>
		</div>
	</form>
</div>
