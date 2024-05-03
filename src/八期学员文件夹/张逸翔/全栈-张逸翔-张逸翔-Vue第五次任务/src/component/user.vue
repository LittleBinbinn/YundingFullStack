<template>
  <div id="user-show">幸运儿{{ $route.query.name }}</div>
  <h2>user</h2>
  请选择烹饪方式
  <RouterLink
    :to="{ path: '/home/user/' + $route.params.name + '/清蒸羊', query: { name: route.params.name, option: '清蒸羊' } }">清蒸羊
  </RouterLink>

  <RouterLink
    :to="{ path: '/home/user/' + $route.params.name + '/爆炒羊肚', query: { name: route.params.name, option: '爆炒羊肚' } }">
    爆炒羊肚
  </RouterLink>
  <RouterView></RouterView>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute()
</script>
<style scoped>
#user-show {
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px;
  background-color: rgb(127, 189, 255);
}
</style>
