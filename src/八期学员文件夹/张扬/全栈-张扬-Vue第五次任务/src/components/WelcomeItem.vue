<template>
  <div>
    <h1>我是Home组件</h1>
    <ul>
      <RouterLink to="/home/show">展示列表</RouterLink>
      <RouterLink to="/home/option">你的选择</RouterLink>
    </ul>
  </div>
  <RouterView></RouterView>
</template>

<script setup></script>

<style scoped>
li {
  list-style: none;
}
</style>
