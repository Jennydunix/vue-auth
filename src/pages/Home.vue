<template>
    <div>
        <h1>Welcome Human</h1>
        <img src="./welcome.png" alt="welcome">
        <p class="intro">
            <a href="/product">Go to product page </a>
        </p>
    </div>
    <!-- <div>
        <router-link to="/products">Got to products page</router-link>
    </div> -->
</template>

<script>
export default {
    name: 'HomePage',
}
</script>

<style>
    .intro, h1 {
        text-align: center;
    }

    a {
        font-size: 20px;
    }
</style>
