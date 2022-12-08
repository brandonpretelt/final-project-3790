<script>
	import { enhance } from '$app/forms';
	import { users } from '$lib/stores/users';
	import { get } from 'svelte/store';
	let loginCredentials = {
		email: '',
		password: ''
	};
	$: console.log($users);
	console.log(get(users.email), '<-- login route');
	function handleSubmit() {
		let confirmLogin = loginCredentials;
		if (confirmLogin == get(users)) {
			console.log('hello world');
		} else {
			console.log('no work, sorry');
		}
		console.log($users);
		// if (email !== $users.email && password !== $users.password) {
		// 	alert('try again');
		// }
	}
</script>

<form action="/auth?/login" method="POST" use:enhance={handleSubmit}>
	<div>
		<label for="email"> Enter Email: </label>
		<input type="email" placeholder="email" name="email" bind:value={loginCredentials.email} />
	</div>
	<div>
		<label for="password"> Enter Password: </label>
		<input
			type="password"
			placeholder="enter password"
			name="password"
			bind:value={loginCredentials.password}
		/>
	</div>
	<div>
		<button class="btn btn-primary">Login!</button>
	</div>
	<div>
		<small>
			Don't have an account? <a class="link" href="/auth/signup">Sign up here</a>
		</small>
	</div>
</form>
