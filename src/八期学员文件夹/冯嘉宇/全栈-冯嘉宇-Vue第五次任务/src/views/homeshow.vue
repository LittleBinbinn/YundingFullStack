<script setup>
    import { ref, watch } from 'vue';
    import { useRouter } from 'vue-router'
    const toDo = ref(["吃饭", "睡觉", "打豆豆"])
    let addNew = ""
    const router = useRouter()
    function myChoose(item) {
        router.push({
            path: "choose",
            query: {
                myChoose: item
            }
        })
    }
    function add() {
        toDo.value.push(addNew)
    }
</script>

<template>
    <ul>
        <li v-for="(item,index) in toDo" key="index" @click="myChoose(item)">{{ item }}</li>
    </ul>
    <input type="text" @keyup.enter="add" v-model="addNew" placeholder="请输入事项"/>
</template>

<style scoped>

</style>
