<script>
	import { enhance } from '$app/forms';
	let signUpCredentials = {
		email: '',
		password: '',
		confirmPassword: ''
	};
	function handleSubmit() {
		console.log(signUpCredentials);
	}
</script>

<form action="/auth?/signup" method="POST" use:enhance={handleSubmit}>
	<div>Time to signup!</div>
	<div>
		<label for="email"> Enter Email: </label>
		<input type="email" placeholder="email" bind:value={signUpCredentials.email} />
	</div>
	<div>
		<label for="password"> Enter Password: </label>
		<input type="password" placeholder="enter password" bind:value={signUpCredentials.password} />
	</div>
	<div>
		<label for="password"> Confirm Password: </label>
		<input
			type="password"
			placeholder="confirm password"
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
