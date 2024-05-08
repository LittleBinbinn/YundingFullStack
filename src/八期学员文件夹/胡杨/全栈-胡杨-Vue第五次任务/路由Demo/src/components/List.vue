<script setup>
import { reactive,ref } from "vue"
import { useRouter } from "vue-router"

const addText = ref('')
const route=useRouter()
const listText = reactive(["吃饭", "睡觉", "打豆豆"])
function showChoice(item) {
    route.push({
        path: 'selected',
        query: {
            choice:item
        }
    })
}
function add(value) {
    listText.push(value)
    addText.value=''
}    
</script>

<template>
    <ul>
        <li v-for="(item,index) in listText" @click="showChoice(item)">{{ item }}</li>
    </ul>
    <input type="text" v-model="addText" @keydown.enter="add(addText)">
</template>

<style>
</style>