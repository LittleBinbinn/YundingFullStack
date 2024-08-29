<template>
  <div id="module">灰太狼选择吃{{ $route.query.name }}的方式是{{ $route.query.option }}</div>
</template>
<script setup>
// console.log(route.query)
</script>
<style scoped>
#module {
  widows: 100px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;
  background-color: antiquewhite;
  border-radius: 20px;
}
</style>
