import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
// In this file, I'm going to save username and password to a store for
// login purposes. This will fake a user until the time comes to use a real db.
// This will also affect the header because if a user is signed in, there will be
// a profile picture along with profile options, else
// it will display a login button.

const defaultValue = { email: '', password: '', confirmPassword: '' };

const initialValue = browser ? window.localStorage.getItem('user') : defaultValue;

export const users = writable(initialValue);
console.log(get(users));
users.subscribe((value) => {
	if (browser) window.localStorage.setItem('user', value);
});
