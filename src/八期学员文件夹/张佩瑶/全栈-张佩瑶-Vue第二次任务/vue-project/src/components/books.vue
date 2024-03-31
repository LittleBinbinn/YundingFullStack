<template>
    <tr v-for="(item,index) in bookList" :key="item.id" :class="{active:index === currentIndex}" @click="trclick(index)">
        <td>{{ index + 1 }}</td>
        <td>{{ item.bookName }}</td>
        <td>￥{{ item.price }}</td>
        <td>
            <button :disabled="item.num <= 0"  @click="decrement(index)">-</button>
            {{ item.num }}
            <button @click="increment(index)">+</button>
        </td>
        <td><button @click="remove(index)">移除</button></td>
    </tr>
</template>

<script>
export default {
    emits: ['add', 'decrease', 'del', 'trclick'],
    props: ["bookList"],
    data() {
        return {
            currentIndex: -1
        }
    },
    methods: {
        increment(index) {
            this.$emit("add", index);
        },
        decrement(index) {
            this.$emit("decrease", index);
        },
        remove(index) {
            this.$emit("del", index);
        }, 
        trclick(index) {
            this.currentIndex = index;
            this.$emit("trclick", index);
        }
    }
}
</script>

<style scoped>
.active{
    background-color: skyblue;
}
</style>