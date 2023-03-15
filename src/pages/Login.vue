<template>
    <form @submit.prevent="onLogin()">
        <h3>Login</h3>
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
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
                {{ errors.password }}
            </div>
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>
<script>
import { LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/modules/auth/storeconstants';
import { mapActions, mapMutations } from 'vuex';
    // import {mapState} from 'vuex';
    import SignupValidations from '../services/SignupValidations';
    

    export default {
        name: 'LoginPage',
        data() {
            return{
                email: '',
                password: '',
                errors: [],
                error: '',
            }
        },
        methods: {

            ...mapActions('auth',{
                login: LOGIN_ACTION
            }),
            ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
           async onLogin() {
                let validations = new SignupValidations(
                    this.email,
                    this.password,
                    );

                    this.errors = validations.checkValidations();
                    if(this.errors.length) {
                        return false;
                    }
                    this.error= '';

                    this.showLoading(true);
                    // login check
            try {
                await this.login({
                    email: this.email,
                    password: this.password,
                });
            } catch (e) {
                this.error = e;
                this.showLoading(false);
            }

            this.showLoading(false);
            this.$router.push('/products');
    
        },
    },
};
        // computed: {
        //     ...mapState('auth', {
        //         FirstName: state => state.name,
        //     }),
        // }
</script>