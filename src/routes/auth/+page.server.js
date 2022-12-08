import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		console.log(email, password);

		throw redirect(303, '/');
		// browser ? window.localStorage.getItem('user')
	},
	signup: async ({ request }) => {
		const data = await request.formData();
		const password = data.get('password');
		const confirmPassword = data.get('confirmPassword');
		if (password !== confirmPassword) {
			throw (404, 'No bueno');
		}
		throw redirect(303, '/auth/login');
	}
};
