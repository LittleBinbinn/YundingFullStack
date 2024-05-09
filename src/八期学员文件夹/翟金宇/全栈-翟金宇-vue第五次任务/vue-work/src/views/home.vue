<template>
  <div class="home">
    <div class="nav">Home</div>
    <input type="text" v-model="newname" @keyup.enter="enter">
    <template v-for="item in name">
      <br><router-link :to="'/home/user/'+item" @click="changestate(item)" >{{ item }}</router-link>
    </template>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from 'vue-router'

let name = ['张三', '李四', '王五']
let newname = ref('')
let route = useRoute()
defineProps({
  state: {
    type: String,
    default:''
  }
})
function enter() {
  name.push(newname.value)
  newname.value = ''
}
function changestate(nowstate) {
  if (name.indexOf(nowstate) != -1) {
    return true
  } else {
    return false
  }
}
</script>

<style scoped>
.nav{
  font-size: 100px;
  color: black;
}
</style>