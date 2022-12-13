import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultValue = { title: 'Apple', price: 0.58, id: 1 };

const initialValue = browser ? window.localStorage.getItem('item') : defaultValue;

export const cartStore = writable(initialValue);

cartStore.subscribe((value) => {
	if (browser) window.localStorage.setItem('item', value);
});
