<template>
  <div>
    <h2>我是user&nbsp;{{ user }}</h2>
    <span>
      <RouterLink :to="`/about/List/Module?module=${useModuleOne}`">useModule1</RouterLink>
      <RouterLink :to="`/about/List/Module?module=${useModuleSecond}`">useModule2</RouterLink>
    </span>
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import { ref, } from "vue";
import { useRoute } from "vue-router";
const route = useRoute()
let user = ref(0)
user = route.query.user

let useModuleOne = ref('')
useModuleOne = 'useModule1'
let useModuleSecond = ref('')
useModuleSecond = 'useModule2'

</script>

<style>

</style>