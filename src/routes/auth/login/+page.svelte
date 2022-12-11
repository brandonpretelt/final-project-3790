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

<Header />
{$users.email}
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
