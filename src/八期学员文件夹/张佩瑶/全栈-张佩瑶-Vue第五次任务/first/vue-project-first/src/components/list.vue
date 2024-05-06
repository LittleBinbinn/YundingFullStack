<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const my_list = ref(["研学", "上课", "晚自习"]);
const inputValue = ref("");
const router = useRouter();

function addList() {
    my_list.value.push(inputValue.value);
    inputValue.value = '';
}
function liClick(item) {
    router.push({
        path: "/home/selected",
        query: {
            option: item
        }
    });
}
</script>

<template>
    <div>
        <div class="list_class">
            <ul v-for="(item,index) in my_list" :key="index">
            <li @click="liClick(item)">{{ item }}</li>
        </ul>
        <input type="text" placeholder="请输入事项" @keyup.enter="addList" v-model="inputValue">
        </div>
    </div>
</template>

<style scoped>
ul {
    margin: 5px;
    list-style-type: disc;
    font-size: 15px;
}
input {
    margin-top: 20px;
}
</style>