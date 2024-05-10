<template>
  <ul>
    <li v-for="items in choice" @click="changechoice(items)">{{ items }}</li>
  </ul>
  <input type="text" value="请输入事项" v-model="list" @keyup.enter="addchoice(choice)">
</template>

<script>
import { mapMutations,mapState } from 'vuex';
  export default {
  computed: {
    ...mapState(["choice"])
  }
}
</script>
<script setup>
//const choice=["吃饭","睡觉","打豆豆"]
import { useRouter } from 'vue-router'
const router = useRouter();
function changechoice(items) {
    router.push({
        path: "/Home/Home_sonchoose",
        query: { name:items }
    })
}
var list=''
function addchoice(choice) {
    choice.push(list)
    list=''
}

</script>

<style scoped>
</style>