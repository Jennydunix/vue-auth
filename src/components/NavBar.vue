<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <div class="collapse navbar-collapse">
        <div navbar-brand>
          <a class="navbar-brand" href="#">TheJennyLuchi</a>
        </div>
        <ul class="navbar-nav ml-auto">


          <li class="nav-item" v-if="isAuthenticated" >
            <router-link to="/" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>

          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/signup" class="nav-link">Sign Up</router-link>
          </li>

          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
            <li class="nav-item" v-if="isAuthenticated">
              <a href="#" class="nav-link" @click.prevent="onLogout()">Logout</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { IS_USER_AUTHENTICATED_GETTER, LOGOUT_ACTION } from "@/store/modules/auth/storeconstants";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", {
      isAuthenticated: IS_USER_AUTHENTICATED_GETTER,
    }),
  },
  methods: {
    ...mapActions('auth', {
      logout: LOGOUT_ACTION,
    }),
    onLogout() {
      this.logout(); 
      this.$router.replace('/login')
    }
  }
};
</script>
 