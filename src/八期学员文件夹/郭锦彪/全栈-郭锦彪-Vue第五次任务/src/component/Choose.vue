<template>
    <h2>你的选择是：</h2>
    <h2>{{ name }}</h2>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const name = router.currentRoute._value.query.name

</script>

<style>

</style>