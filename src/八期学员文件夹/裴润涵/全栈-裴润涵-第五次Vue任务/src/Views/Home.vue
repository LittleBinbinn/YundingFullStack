<template>
  <h1>我是Home组件</h1>
  <router-link to="/Home/Home_sonshow">展示列表</router-link>|<router-link to="/Home/Home_sonchoose">你的选择</router-link>
  <router-view ></router-view>
  
</template>

<script>
  export default {
  
}
</script>

<style scoped>
</style>