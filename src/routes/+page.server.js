import { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } from '$env/static/private';

// url = /random/?query=groceries&content_filter=high&orientation=landscape&count=1
const URL = `https://api.unsplash.com/photos`;

export async function load() {
	const photos_response = await fetch(
		`${URL}/random/?client_id=${
			process.env.UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY
		}&query=groceries&content_filter=high&orientation=landscape&count=1`
	);
	const photos_data = await photos_response.json();
	return photos_data;
}
