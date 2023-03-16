# Vue js application using the cli then simulate a fake authentication experience using vuex and vue router

For this project, i designed the login and signup page for implementing vue authentication. Setup the Vuex state management and added validations for the login and signup page and save the response data from signup into the Vuex store state with mutation. I was also able to catch errors on the server and show them on both the signup page and login page.

I added a loading spinner component for my application and used it with the help of the store

I used Vue Routing and applied Navigation guards for authentication and routing page.  I made provisions for wildcard routes a.k.a 404 pages that redirects the user back to the home page.

I created a product page that shows the product’s details by using the api https://dummyjson.com/products. And users that haven't been authenticated ie users that haven't successfully logged in can't access the product page.

I added to my application a logout functionality and applied navigation guards for authentication and routing page.

_______________________________________________________________________________________________________________________

![vue-auth](https://user-images.githubusercontent.com/88034429/225673907-6656b7cc-99e5-4f6e-9d06-13c7f58a9959.png)
