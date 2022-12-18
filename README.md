# 3790 Final Project

[Live App](https://final-project-svelte-class.vercel.app)

[Github Link](https://github.com/brandonpretelt/final-project-3790)

## IN PROGRESS

- [ ] 1 example of LifeCycle Functions
- [ ] Click Events
- [ ] Need 1 more API loaded using a mix of SvelteKit functions
- [ ] JavaScript Array methods

## FINISHED

- [x] onMount is here

- [x] CSS transitions

- [x] Svelte Conditional Logic
      Basically, the whole file, I think. Lots of if and each statements
- [x] 5 functional routes
      [Routes](https://github.com/brandonpretelt/final-project-3790/tree/main/src/routes)
- [x] Writable store 1
      [Writable Store for login/signup](https://github.com/brandonpretelt/final-project-3790/blob/main/src/lib/stores/users.js)
      [File in which it is used](https://github.com/brandonpretelt/final-project-3790/blob/ce52d92ffd95b3aef36dbc8ff8ced8a130b52ab3/src/lib/components/Header.svelte#L3)
- [x] Writable store 2
      [Writable store for cart feature](#)

- [x] At least 3 Components
      [Components](https://github.com/brandonpretelt/final-project-3790/tree/main/src/lib/components)
- [x] Form Validation and Input

### /

This root route displays the main page with a sign up button that links to a signup or login route. It uses localstorage to save the logged in / logged out state. The main routed, when logged in, displays the search bar so that you can serach for products. It also displays the profile photo and menu and shopping cart when logged in.

### /auth/signup.svelte

This route has the signup form. It uses the HTML5 required attributes for validation and redirects to login after signup.

### /auth/login.svelte

This route has a login form. It also uses HTML5 required attributes for valdiation and redirects back to the main route but, because of local storage, remembers that the user is logged in.

### /profile

The profile route displays your recent orders.

### /orders

You reach this route by clicking on the Orders link in the profile menu. It,

### /checkout

This route has a list of everything that was in your cart, along with a photo of it and the price.
