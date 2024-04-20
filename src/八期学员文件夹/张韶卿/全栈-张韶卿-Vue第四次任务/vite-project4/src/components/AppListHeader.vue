<template>
    <div :class="bangClass">{{ list.name }}</div>
    <img :src="list.coverImgUrl" :class="picClass" />
    <div :class="jieClass">{{ list.description }}</div>

</template>


<script setup>
import { ref, defineProps, onMounted } from 'vue';
const props = defineProps({
    list: {
        type: Object,
        required: true
    }
});

const picClass = ref('pic');
const bangClass = ref('bang');
const jieClass = ref('jie');

onMounted(() => {
    console.log(props.list); // 检查 list prop 是否正确传递  
});

</script>



<style scoped>
.pic{
    position: relative;
    left: 170px;
    top: -10px;
    width: 100px;
    height: auto;
}
.bang{
    position: relative;
    top: 48px;
    left: 39px;
    font-weight: bold;
    font-size: large;
    /* background-color: #c43535; */
}
.jie{
    width: 500px;
}

</style>