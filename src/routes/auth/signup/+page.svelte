<script>
	import { enhance } from '$app/forms';
	import { users } from '$lib/stores/users';
	import { get } from 'svelte/store';
	console.log($users);
	console.log(get(users));
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
		$users = signUpCredentials;
		console.log($users);
	}
</script>

<form action="/auth?/signup" method="POST" use:enhance={handleSignup}>
	<div>Time to signup!</div>
	<div>
		<label for="email"> Enter Email: </label>
		<input type="email" placeholder="email" name="email" bind:value={signUpCredentials.email} />
	</div>
	<div>
		<label for="password"> Enter Password: </label>
		<input
			type="password"
			placeholder="enter password"
			name="password"
			bind:value={signUpCredentials.password}
		/>
	</div>
	<div>
		<label for="confirmPassword"> Confirm Password: </label>
		<input
			type="password"
			placeholder="confirm password"
			name="confirmPassword"
			bind:value={signUpCredentials.confirmPassword}
		/>
	</div>
	<div>
		<button class="btn btn-primary">Sign Up!</button>
	</div>
	<div>
		<small>
			Have an account? <a class="link" href="/auth/login">Login here</a>
		</small>
	</div>
</form>
