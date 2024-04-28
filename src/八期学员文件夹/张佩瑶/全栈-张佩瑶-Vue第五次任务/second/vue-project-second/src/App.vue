<script setup>

</script>

<template>
    <div class="app">
        <h2>app</h2>
        <div class="app-nav">
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <div class="app-view">
            <router-view></router-view>
        </div>
        <br>
    </div>
</template>

<style scoped>
.app {
    background-color: pink;
}
h2 {
    padding-top: 10px;
    padding-left: 15px;
}
a {
    margin-left: 20px;
    color: darkturquoise;
}
.app-view {
    margin-left: 22px;
    margin-right: 22px;
}
</style>