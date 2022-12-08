<script>
	import { enhance } from '$app/forms';
	let loginCredentials = {
		email: '',
		password: ''
	};
	function handleSubmit() {
		console.log(loginCredentials);
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
