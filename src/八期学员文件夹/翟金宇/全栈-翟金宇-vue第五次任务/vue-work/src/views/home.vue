<template>
  <div class="home">
    <div class="nav">Home</div>
    <input type="text" v-model="newname" @keyup.enter="enter">
    <template v-for="item in name">
      <br><router-link :to="'/home/user/'+item">{{ item }}</router-link>
    </template>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue"

let name = ['张三', '李四', '王五']
let newname = ref('')
function enter() {
  name.push(newname.value)
  newname.value = ''
}
</script>

<style scoped>
.nav{
  font-size: 100px;
  color: black;
}
</style>