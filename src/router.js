import { createRouter, createWebHistory } from "vue-router";
import Login from './pages/Login.vue';
import Signup from './pages/SignUp.vue';
import Products from './pages/Products.vue';
import Home from './pages/Home.vue';
import Error from './pages/Error.vue'; 
import store from "./store/store";
import { IS_USER_AUTHENTICATED_GETTER } from "./store/modules/auth/storeconstants";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login, meta: {auth: false} },
    {path: '/signup', component: Signup, meta: {auth: false}},
    {path: '/products', component: Products, meta: {auth: true}},
    {path: '/:pathMatch(.*)*',component: Error},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if(`auth` in to.meta && to.meta.auth && !store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]) {
        next('/login');
    } else if (!to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]) {
        next('/products');
    } else {
        next();
    }
})


export default router;