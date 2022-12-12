import { writable } from 'svelte/store';
import { browser } from '$app/environment';
export let title, price;
const defaultValue = { title, price };

const initialValue = browser ? window.localStorage.getItem('item') : defaultValue;

export const cartStore = writable(initialValue);

cartStore.subscribe((value) => {
	if (browser) window.localStorage.setItem('item', value);
});
