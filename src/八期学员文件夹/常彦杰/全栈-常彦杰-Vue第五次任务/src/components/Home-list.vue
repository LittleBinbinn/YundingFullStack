<template>
  <input type="text" v-model="choice" @keyup.enter="add">
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="mychoice(item)">{{ item }}</li>
    </ul>
</template>
<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    let list = ref(['吃饭','睡觉','发癫']);
    const choice = ref('')
const mychoice = function (item) {
  router.push({
    path:
      '/home/choice',
    query: {
      info:item
    }    
      })
}
const add = function () {
  list.value.push(choice.value);
}
</script>
<style scoped>
</style>