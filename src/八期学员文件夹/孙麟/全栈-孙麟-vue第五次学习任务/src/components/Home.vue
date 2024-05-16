<script setup>
import Click from './Click.vue'
</script>

<template>
    <div>
        <h2 class="home">这是Home组件</h2>
        <Click></Click>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.home {
    margin: 20px auto;
    width: 200px;
}
</style>