<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const my_list = ref(["张三", "李四", "王五"]);
const inputValue = ref(" ");

function addList() {
    my_list.value.push(inputValue.value);
    inputValue.value = '';
}
function liClick(item) {
    router.push({
        path: "/home/" + item
    });
}

</script>

<template>
    <div class="home">
        <h2>home</h2>
        <div class="body">
        <input type="text" @keyup.enter="addList" v-model="inputValue">
        <div class="home-nav">
            <ul v-for="(item,index) in my_list" :key="index">
                <li @click="liClick(item)">{{ item }}</li>
            </ul>
        </div>
        </div>
        <div class="bottom">
            <router-view></router-view>
        </div>
        <br>
    </div>
</template>

<style scoped>
.home {
    background-color: coral;
}
h2 {
    padding: 20px;
}
input {
    margin-left: 20px;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 8px;
}
.body {
    display: flex;
    flex-direction: row;
}
.home-nav {
    display: flex;
    flex-direction: row;
}
li {
    margin: -10px;
    list-style: none;
    text-decoration: underline;
}
li:hover {
    cursor:pointer;
}
.bottom {
    margin-left: 20px;
    margin-right: 20px;
}
</style>