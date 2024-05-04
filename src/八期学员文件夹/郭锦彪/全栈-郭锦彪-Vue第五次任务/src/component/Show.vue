<template>
    
    <div>
    <ul v-for="list,index in lists" :key="list">
        <li @click="click(index)">{{ list }}</li>
    </ul>
    <input @keydown.enter="sure" v-model="value">
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { ref,reactive } from 'vue'
import { onMounted } from 'vue';
const lists = localStorage.getItem('lists').split(',')
const router = useRouter()
let value = ref('')
function click(index) {
    router.push({
        path: '/home/choose',
        query: {
            name: lists[index]
        }
    })
}
function sure() {
    lists.push(value.value)
    localStorage.setItem('lists', lists)
    value.value=''
}
onMounted(() => {
    const local = localStorage.getItem('lists').split(',')
    localStorage.setItem(lists, local)
})
</script>
<style>

</style>