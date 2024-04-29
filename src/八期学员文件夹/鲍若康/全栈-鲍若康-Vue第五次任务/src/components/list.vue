<script setup>
import { useRouter } from 'vue-router';
import { reactive,ref } from 'vue';

const list = reactive([
    "吃饭", "睡觉", "打豆豆"
])
var newlist ="";

const router = useRouter()

function addlist() {
    list.push(newlist)
    newlist=""
    
}
function select(index) {
    router.push({
        path: "/home/selected",
        query: {
            select: list[index]
        } 
    })

}
</script>

<template>
    <div>
        <ul>
            <li v-for="(item , index) in list" @click="select(index)" :key="item">{{ item }}</li>
        </ul>
        <input type="text" placeholder="请输入事项" v-model="newlist" @keyup.enter="addlist()" />


    </div>

</template>
