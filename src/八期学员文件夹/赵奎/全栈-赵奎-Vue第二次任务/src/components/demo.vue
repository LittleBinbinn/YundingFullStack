<template>
    <td>{{ index + 1 }}</td>
    <td @click="chclick(index)">{{ book[index].bookName }}</td>
    <td>￥{{ book[index].price }}</td>
    <td><button :disabled="book[index].num <= 0" @click="decrease(index)">-</button>
        {{ book[index].num }}
        <button @click="add(index)">+</button></td>
    <td><button @click="remove(index)">移除</button></td>
</template>

<script>
export default {
    props: ["book", "index"],
    emits: ['chclick'],
    methods: {
        remove(index) {
            this.book.splice(index, 1);
        },
        add(index) {
            this.book[index].num++
        },
        decrease(index) {
            this.book[index].num--
        },
        chclick(index) {
            this.$emit("chclick", index)
        }
    }
}
</script>

<style></style>