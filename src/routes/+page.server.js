import { SPOONACULAR_KEY } from '$env/static/private';

export async function load() {
	const meals_response = await fetch(
		`https://api.spoonacular.com/food/products/search?query=pizza`,
		{
			headers: {
				'x-api-key': `${SPOONACULAR_KEY || process.env.SPOONACULAR_KEY}`
			}
		}
	);
	const meals_data = await meals_response.json();
	console.log(meals_data);
	return meals_data;
}
