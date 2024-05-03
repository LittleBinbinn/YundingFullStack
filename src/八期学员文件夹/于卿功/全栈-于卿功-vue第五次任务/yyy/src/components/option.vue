<script setup>
import { useRoute } from 'vue-router';
const route=useRoute();
console.log(route.params);
const thing=route.params.id;
</script>

<template>
<div>
    <h2>我的选择是：</h2>
    <div>{{ thing }}</div>
</div>
</template>

<style scoped>
    
</style>