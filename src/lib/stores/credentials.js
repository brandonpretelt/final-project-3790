import { writable } from 'svelte/store';
// In this file, I'm going to save username and password to a store for
// login purposes. This will fake a user until the time comes to use a real db.
// This will also affect the header because if a user is signed in, there will be
// a profile picture along with profile options, else
// it will display a login button.
