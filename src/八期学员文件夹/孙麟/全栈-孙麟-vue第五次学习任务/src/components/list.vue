<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const list = ref(['恰饭', '碎觉', '打豆豆'])
const router = useRouter()
let show = (event) => {
    let text = event.target.textContent
    //console.log(showText.value)
    router.push({ name: 'Choice', params: { textshow: text } })
}

const input = ref('')
let add = () => {
    if (input.value.length > 0) {
        list.value.push(input.value)
    }

}
</script>

<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index" @click='show'>&nbsp;{{ item }}</li>
        </ul>
        <input type="text" @keydown.enter="add" v-model="input">
    </div>
</template>

<style scoped>
ul {
    width: 500px;
    position: relative;
    left: 500px;
}

input {
    position: relative;
    left: 550px;
}
</style>