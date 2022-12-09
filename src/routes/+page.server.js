export async function load() {
	const meals_response = await fetch(
		`https://api.spoonacular.com/food/products/search?query=pizza`,
		{
			headers: {
				'x-api-key': 'a4c62972ac7347f29234a666be03b496'
			}
		}
	);
	const meals_data = await meals_response.json();
	// console.log(meals_data);
	return meals_data;
}
