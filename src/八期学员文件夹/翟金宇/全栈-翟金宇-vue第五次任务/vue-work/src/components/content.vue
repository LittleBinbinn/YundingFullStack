<template>
  <div class="user">
    <router-link :to="'/home/user/'+name+'/userModule1'">userModule1</router-link>
    <router-link :to="'/home/user/'+name+'/userModule2'">userModule2</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default:""
    }
  })
</script>

<style scoped>
</style>