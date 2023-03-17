# Vue js application using the cli to simulate a fake authentication experience using vuex and vue router

For this project, i designed the login and signup page for implementing vue authentication. I setup the Vuex state management and added validations for the login and signup page and saved the response data from signup into the Vuex store state with mutation. I was also able to catch errors on the server and show them on both the signup page and login page.

I added a loading spinner component for my application and used it with the help of the store

I used Vue Routing and applied Navigation guards for authentication and routing page.  I made provisions for wildcard routes a.k.a 404 pages that redirects the user back to the login page.

I created a product page that shows the product’s details by using the api https://dummyjson.com/products. And users that haven't been authenticated ie users that haven't successfully logged in can't access the product page.

I added to my application a logout functionality and applied navigation guards for authentication and routing page.

I hosted this application on Vercel and here's the link: https://vue-auth-dun.vercel.app/

_______________________________________________________________________________________________________________________


![vue-auth - Google Chrome 3_17_2023 12_58_39 PM (2)](https://user-images.githubusercontent.com/88034429/225898441-37f43f7e-c82f-4f53-9526-d30f38668964.png)
