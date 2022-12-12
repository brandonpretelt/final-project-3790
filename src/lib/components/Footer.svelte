<script>
	import { users } from '$lib/stores/users';
</script>

<footer
	class="footer flex justify-center items-center p-4 bg-neutral text-neutral-content gap-5 bottom-0"
	class:bottom-0={$users.username}
>
	<div class="flex items-center grid-flow-col mx-2">
		<p class="mx-4">Copyright © 2022 - All right reserved</p>
	</div>
</footer>
