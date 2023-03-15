<template>
    <h1>Error</h1>
    <p>Oops, something went wrong. Please try again later</p>
    <button class="error_btn">
        <router-link to="/" class="nav-link">OK</router-link>
    </button>
</template>

<script>

    export default {
        name: Error
    }
</script>

<style>
  h1, p{
    text-align: center;
  }
  .error_btn {
    background-color: #292b2c;
    color: black;
    border: 50px;
    width: 100%;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
  }
</style>