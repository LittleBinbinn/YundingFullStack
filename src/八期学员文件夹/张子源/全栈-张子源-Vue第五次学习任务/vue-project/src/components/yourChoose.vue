<template>
    <div class="chooseShow">
        <h2> 你的选择是：{{ $route.query.habit }}</h2>
    </div>
</template>

<script setup>
</script>

<style scoped>
.chooseShow {
    width: 400px;
    margin: auto;
}
</style>