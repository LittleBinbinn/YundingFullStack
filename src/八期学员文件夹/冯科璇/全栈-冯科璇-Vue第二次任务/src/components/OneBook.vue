<template>
    <td>{{index + 1}}</td>
    <td @click="tdclick(index)">{{books[index].name}}</td>
    <td>¥{{books[index].price}}</td>
    <td>
        <button :disabled="books[index].count <= 0" @click="sub(index)">-</button>
        {{books[index].count}}
        <button @click="inc(index,item)">+</button>
    </td>
    <td><button @click="rem(index)">移除</button></td>
</template>

<script>
export default {
    props: ["books","index"],
        emits:["onClick"],
            methods:{
                sub(index){
                    this.books[index].count --
                },
                inc(index){
                    this.books[index].count ++
                },
                rem(index){
                    this.books.splice(index,1)
                },
                onClick(index) {
                    this.$emit("onClick",index)
                }
            },
    }
</script>

<style scoped>
    td{
            border: 1px solid #aaa;
        }
</style>