<template>
    <div>
        <h1>Products Page</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <thead>
                    <tr v-for="product in products" :key="product">
                        <td>{{ product.id }}</td>
                        <td>{{ product.title }}</td>
                        <td>{{ product.description }}</td>
                    </tr>
                </thead>
            </tbody>
        </table>
    </div>
</template>

<script>
import axiosInstance from '../services/AxiosTokenInstance'
import axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';
import { GET_USER_TOKEN_GETTER, LOADING_SPINNER_SHOW_MUTATION } from '@/store/modules/auth/storeconstants';
    export default {
        name:'ProductPage',
        data() {
            return{
                products: [],
            };
        },
        computed: {
            ...mapGetters('auth', {
               token: GET_USER_TOKEN_GETTER ,
            })
        },
        mounted() {
            axiosInstance
            this.showLoading(true);
            axios.get(`https://dummyjson.com/products`,
            )
            .then(response => {
                this.formatProducts(response.data.products);
                this.showLoading(false);
            }).catch(() => {
                this.showLoading(false);
            }); 
        },
        methods: {
             ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
            formatProducts(products) {
               for(let key in products) {
                    this.products.push({...products[key], id: key});
               } 
               console.log(this.products);
            }
        }
    }
</script>

<style scoped>

</style>
