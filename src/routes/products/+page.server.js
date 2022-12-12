import { SPOONACULAR_KEY } from '$env/static/private';
let URL = 'https://api.spoonacular.com/food/products';

export const actions = {
	searchProducts: async ({ request }) => {
		const data = await request.formData();
		const productSearch = data.get('searchProduct');
		try {
			const product_response = await fetch(`${URL}/search?query=${productSearch}`, {
				headers: { 'x-api-key': `${SPOONACULAR_KEY || process.env.SPOONACULAR_KEY}` }
			});
			const product_data = await product_response.json();
			return product_data;
		} catch (e) {
			console.log(e.message);
		}
	}
};
