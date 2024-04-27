<script setup>  
import { ref, defineEmits } from 'vue';  
import router from '@/router/router';  
  
let list = ref(['吃屎', '吃垃圾', '处对象']); // 使用 ref 来创建响应式数据  
let thing = ref(''); // 使用 ref 来创建响应式数据  
  
const add = () => {  
    console.log(thing.value); // 访问 ref 数据的值需要使用 .value  
    list.value.push(thing.value); 
};  
function chose(index) {
    console.log(index);
    console.log(list.value[index])
    router.push(`/home/option/${list.value[index]}`); 
}
</script>  
  
<template>  
<div>  
    <ul v-for="(item, index) in list" :key="item">  
        <li @click="chose(index)">{{ item }}</li>  
    </ul> 
    <input type="text" v-model="thing" @keyup.enter="add"> <!-- 访问 ref 数据的值需要使用 .value -->  
</div>  
</template>  
  
<style scoped>  

</style>