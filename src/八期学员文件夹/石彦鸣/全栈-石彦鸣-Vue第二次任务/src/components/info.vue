<template>
    <td>{{ index + 1 }}</td>
    <td @click="tdclick(index)">{{ book[index].bookName }}</td>
    <td>￥{{ book[index].price }}</td>
    <td><button :disabled="book[index].num <= 0" @click="decrease(index)">-</button>{{ book[index].num }}<button
            @click="increase(index)">+</button></td>
    <td><button @click="remove(index)">移除</button></td>
</template>

<script>
export default {
    props: ["book", "index"],
    emits: ['tdclick'],
    methods: {
        remove(index) {
            this.book.splice(index, 1);
        },
        increase(index) {
            this.book[index].num++
        },
        decrease(index) {
            this.book[index].num--
        },
        tdclick(index) {
            console.log(index)
            this.$emit("tdclick",index)
        }
    }
}
</script>

<style>

</style>