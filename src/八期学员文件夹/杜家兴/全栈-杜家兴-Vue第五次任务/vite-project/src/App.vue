<script setup>
import SonApp from './components/SonApp.vue';
</script>

<template>
    <div>
        <SonApp></SonApp>
        <router-view></router-view>
    </div>
</template>

<style scoped>
*{
    margin:0 auto;
    padding: 0;
}
</style>