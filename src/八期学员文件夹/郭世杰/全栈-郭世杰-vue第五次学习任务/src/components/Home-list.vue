<template>
    <input type="text" v-model="imfor" @keyup.enter="add">

    <ul>
        <li v-for="(item,index) in list" :key="index" @click="clic(item)">{{ item }}</li>
    </ul>
</template>

<script setup>
    import {ref} from 'vue';
    import {useRoute} from 'vue-router';
    let list = ref(['吃饭','睡觉','打豆豆']);
    const imfor = ref('')
    const clic = function (item){
        router.push({
            path:'/home/choice',
            query:{
                infor:item
            }
        })
    }
    const add = function (){
        list.value.push(imfor.value);
    }
</script>

<style>

</style>