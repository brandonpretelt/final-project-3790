<script>
	import { users } from '$lib/stores/users';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
{$users.email}
<h1>hi there</h1>
