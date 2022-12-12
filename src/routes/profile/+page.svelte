<script>
	import { users } from '$lib/stores/users';
	import Header from '$lib/components/Header.svelte';
</script>

<Header title={'GroceryGo'} />
{#if $users.email}
	{$users.email}
{:else}
	<span>Hi ya</span>
{/if}
<h1>hi there</h1>
