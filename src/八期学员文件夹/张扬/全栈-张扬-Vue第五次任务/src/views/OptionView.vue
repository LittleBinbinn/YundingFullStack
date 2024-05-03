<template>
  <h1>你的选择是：</h1>
  <div>{{ $route.query.name }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute()
let name = route.query.name
</script>

<style>

</style>