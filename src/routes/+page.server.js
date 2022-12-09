import { KROGER_CLIENT_SECRET, KROGER_CLIENT_ID } from '$env/static/private';

export async function load() {
	const meals_response = await fetch('https://api.kroger.com/v1/products?&filter.term=apples', {
		headers: {
			Authorization: `Basic {{base64(${KROGER_CLIENT_ID}${KROGER_CLIENT_SECRET})}}`
		}
	});
	const meals_data = await meals_response.json();
	console.log(meals_data);
}
