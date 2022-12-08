export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('passsword');
		console.log(email, password);
	},
	signup: async ({ request }) => {
		console.log('sign up...');
	}
};
