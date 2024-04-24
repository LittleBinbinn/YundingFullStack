<template>
    <tr class="show">
        <th>{{ book.id }}</th>
        <th @click="emit('showbook',book.name)">《{{ book.name }}》</th>
        <th>￥{{ book.price }}</th>
        <th><button @click="reduce(book.id)">-</button>{{ book.number }}<button @click="add(book.id)">+</button></th>
        <th><button @click="handleDelete(book.id)">移除</button></th>
    </tr>
</template>

<script lang="ts" setup name="'MyItem'">
import { ref,computed, } from "vue";
let props = defineProps(['book','deleteBook','addNumber','reduceNumber'])
const emit = defineEmits(['showbook'])

function handleDelete(id:number){
    props.deleteBook(id)
}
function reduce(id:number){
    props.reduceNumber(id)
}

function add(id:number){
    props.addNumber(id)
}
</script>

<style>
.show:hover {
    background-color: yellowgreen;
}
.active {
    background-color: darkorange;
}
</style>