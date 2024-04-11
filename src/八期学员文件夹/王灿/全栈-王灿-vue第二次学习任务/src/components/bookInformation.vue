<template>
    <tr v-for="(item,index) in bookList" :key="item"  :class="{active:index===currentIndex}">
        <td>{{ index +1 }}</td>
        <td  @click="addClass(index)">{{ bookList[index].bookName }}</td>
        <td>￥{{ bookList[index].price }}</td>
        <td><button @click="decrement(index)" :disabled="bookList[index].num<=0">-</button> {{ bookList[index].num }} <button @click="increment(index)">+</button></td>
        <td><button @click="removeBook(index)">移除</button></td>
    </tr>

</template>

<script>
export default {
    emits: ['dec', 'inc', 'remove','choose'],
    props: {
        bookList: {
            type: Object,
            required:true
        }
    },
    data() {
        return {
            currentIndex:-1
        }
    },
    methods: {
        decrement(index) {
            this.$emit("dec",index)
        },
        increment(index) {
            this.$emit("inc",index)
        },
        removeBook(index) {
            this.$emit("remove",index)
        },
        addClass(index) {
            this.currentIndex = index
            this.$emit("choose",index)
        }
    }
}
</script>

<style scoped>
.active {
    background-color: pink;
}
td{
border: 1.5px solid black ;
padding: 8px 30px;
height: 25px;
text-align: center;
}
</style>