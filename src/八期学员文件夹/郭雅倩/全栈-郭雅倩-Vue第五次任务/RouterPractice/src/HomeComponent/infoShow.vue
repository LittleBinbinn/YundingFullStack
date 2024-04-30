<template>
    <ul class="info">
        <li
        v-for="(item,index) in items"
        :key="index"
        @click="itemclick(item)"
        >{{ item }}</li>
    </ul>
    <div class="info">
    <input 
    ref="inputRef"
    type="text" 
    v-model="newItem" 
    placeholder="请输入你的选择" 
    @keyup.enter="addListItem">
</div>
</template>
<script setup>
import { ref,computed } from 'vue'
import {  useRouter } from 'vue-router'
import { useStore } from 'vuex' 

const newItem = ref('')
const store = useStore()  
const router = useRouter()
function itemclick(item) {
    
    router.push({
        path:'mychoice',
        query: {
            itemclick:item
        }
    })
    
}
const addListItem = () => {
    if (newItem.value.trim() !== '') {
        store.commit('addItem', newItem.value) // 传递newItem.value作为参数 
        newItem.value=''
    }
}
//获取响应式items数据
const items = computed(() => store.state.items) 

</script>
<style scoped>
.info{
    font-size: 20px;
    width: 400px;
    margin: 0 auto;
}
.info{
    width: 400px;
    margin: 0 auto;
}
</style>