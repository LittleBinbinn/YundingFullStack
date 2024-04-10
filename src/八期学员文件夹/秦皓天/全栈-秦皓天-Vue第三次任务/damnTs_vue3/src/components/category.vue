<script lang="ts" setup>
</script>

<template>
    <div class="category">
        <slot name="page">默认内容</slot>
        <slot name="word">默认</slot>
    </div>
</template>

<style scoped>
    .category{
        margin-top: 150px;
        width: 250px;
        height: 350px;
        display: flex;
        flex-direction: column;
    }
</style>