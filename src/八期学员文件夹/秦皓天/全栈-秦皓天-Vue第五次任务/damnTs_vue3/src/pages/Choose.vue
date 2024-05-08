<template>
    <div class="choose">
        <h2>你的选择是:{{route.query.title}}</h2>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style scoped>

</style>