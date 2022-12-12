import { SPOONACULAR_KEY } from '$env/static/private';
let URL = 'https://api.spoonacular.com/food/products';
/* 

const product_response = await fetch(`${URL}/search?query=${productSearch}`, {
				headers: { 'x-api-key': `${SPOONACULAR_KEY || process.env.SPOONACULAR_KEY}` }
			});
 */

export async function load({ params }) {
	const { id } = params;
	const products_reponse = await fetch(`${URL}/${id}`, {
		headers: { 'x-api-key': `${SPOONACULAR_KEY || process.env.SPOONACULAR_KEY}` }
	});
	const products_data = await products_reponse.json();
	console.log(products_data);
	return products_data;
}
