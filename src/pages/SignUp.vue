<template>
    <form @submit.prevent="onSignup()">
        <h3>SignUp</h3>
        <div class="alert alert-danger" v-if="error"> {{ error }}</div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model.trim="email" placeholder="Email"/>
            <div style="color: red;" class="error" v-if="errors.email">
                {{ errors.email}}
            </div>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model.trim="password" placeholder="Password"/>
            <div style="color: red;" class="error" v-if="errors.password">
                {{ errors.password}}
            </div>
        </div>

        <button class="btn btn-primary btn-block">Signup</button>
    </form>
</template>



<script>
import SignupValidations from '../services/SignupValidations';
import { mapActions, mapMutations } from 'vuex';
import {
    LOADING_SPINNER_SHOW_MUTATION,
    SIGNUP_ACTION,
} from '@/store/modules/auth/storeconstants';
export default {
    data() {
        return {
            email: '',
            password: '',
            errors: [],
            error: '',
        };
    },
    beforeRouteLeave() {
        console.log('rote leaving');
        console.log(this.$store);
    },
    beforeRouteEnter(_, _1, next) {
        next((vm) => {
            console.log('route entering');
            console.log(vm.$store.state.auth);
        });
    },
    methods: {
        ...mapActions('auth', {
            signup: SIGNUP_ACTION,
        }),
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        async onSignup() {
            let validations = new SignupValidations(
                this.email,
                this.password,
            );
            this.errors = validations.checkValidations();
            if ('email' in this.errors || 'password' in this.errors) {
                return false;
            }
            //make spinner true
            this.showLoading(true);
            //signup registration
            try {
                await this.signup({
                    email: this.email,
                    password: this.password,
                });
            } catch (error) {
                this.error = error;
                this.showLoading(false);
            }
            this.showLoading(false);
             this.$router.replace('/products');
            
            //make spinner false
        },
    },
};
</script>