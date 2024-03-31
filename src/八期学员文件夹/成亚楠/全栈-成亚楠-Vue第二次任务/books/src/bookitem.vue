<template>
    <tr>
        <td>{{index + 1}}</td>
        <td @click="showName(item)" >{{item.name}}</td>
        <td>{{formatPrice(item.price)}}</td>
        <td>
            <button :disabled="item.count<=0" @click="decrement(index)">-</button>
            {{item.count}}
            <button @click="increment(index)">+</button>
        </td>
        <td>
            <button @click="removeBook(index,item)">移除</button>
        </td>
    </tr>
</template>

<script>
export default {
    name:'bookitem',
    props: ["books","index","item"],
    methods: {
        decrement(index) {
            this.books[index].count--
        },
        increment(index) {
            this.books[index].count++
        },
        removeBook(index,item) {
            this.books.splice(index,1)
        },
    }
}
</script>
<style >
</style>