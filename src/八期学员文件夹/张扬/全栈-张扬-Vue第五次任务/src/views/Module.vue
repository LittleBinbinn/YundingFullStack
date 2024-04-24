<template>
  <div>
    <h2>Module</h2>
    <span>{{ module }}</span>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute()
let module = route.query.module
</script>

<style>

</style>