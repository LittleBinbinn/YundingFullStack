<script setup>
import { computed, defineProps, ref } from 'vue';
import { defineEmits } from 'vue';

import AddBook from '../components/AddBook.vue'
const propsContent = defineProps({
    item: {
        type: Object
    },
    // chartLength: {
    //     type: Number
    // },
    // AppTotalPrice :{
    //     type:Number
    // }
})
// console.log('这是父组件传来的总价值',propsContent.AppTotalPrice)
const emit = defineEmits(['showInfor', 'addNumber', 'delNumber', "totalPrice"])
// const emit = defineEmits(['showInfor', 'addNumber', 'delNumber'])
const childShowInfor = () => {
    emit("showInfor", propsContent.item.bookname)
}
// 改变数量
var NewNumber = Number(propsContent.item.number)
// 增加数量
var totalPrice = propsContent.AppTotalPrice

function addNumber() {
    NewNumber += 1;
    // console.log(NewNumber)
    totalPrice = Number(propsContent.item.perPrice) * NewNumber;
    emit('addNumber', { id: propsContent.item.id, number: NewNumber, totalPrice: totalPrice })
    // emit('addNumber', { id: propsContent.item.id, number: NewNumber})
    return totalPrice
}
// 减少数量
function delNumber() {
    NewNumber -= 1;
    totalPrice = Number(propsContent.item.perPrice) * NewNumber;
    emit('delNumber', { id: propsContent.item.id, number: NewNumber, totalPrice: totalPrice })
    // emit('delNumber', { id: propsContent.item.id, number: NewNumber})
}
const showOrUnShow = computed(() => {
    return propsContent.item.number <= 0 ? true : false;
})
// function delpop() {
//     propsContent.reduceNumber(id)
//       console.log(222)
// }
</script>

<template>

    <tr @click="childShowInfor">
        <td>{{ propsContent.item.id }}</td>
        <td>《{{ propsContent.item.bookname }}》</td>
        <td>￥{{ propsContent.item.perPrice }}</td>
        <td>
            <button @click="delNumber" :class="{ NoDisplay: showOrUnShow }">-</button>
            {{ propsContent.item.number }}
            <button @click="addNumber">+</button>
        </td>
        <td><button @click="delpop">移除</button></td>
    </tr>
</template>

<style scoped>
td {
    height: 50px;
    border: 1px solid black;
}

tr:hover {
    background-color: #999;
}

button {
    margin: 5px;
}

.NoDisplay {
    cursor: not-allowed;
    pointer-events: none;
}
</style>