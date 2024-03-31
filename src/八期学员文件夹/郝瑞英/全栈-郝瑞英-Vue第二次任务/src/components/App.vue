<template>
    <div class="app">

        <books-info :books="books" @dec="decrement" @inc="increment" @rem="remove"></books-info>

        <tr v-if="showAdd">
            <td>{{ books.length + 1 }}</td>
            <td><input v-model="newBook.name" type="text"></td>
            <td><input v-model="newBook.price" type="text"></td>
            <td>
                <button @click="increment" v-bind:disabled="newBookCount <= 1">-</button>
                {{ newBookcount }}
                <button @click="decrement">+</button>
            </td>
        </tr>

        <td><button @click="addBook">确定</button></td>
        <button @click="showAdd = true">添加</button>
        <button @click="showAdd = false">取消</button>
    </div>
</template>


<script>
import BooksInfo from './BooksInfo.vue'
export default {
    components: {
        BooksInfo

    },
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: "《JavaScript高级程序设计》",
                    price: 126,
                    count: 1,
                },
                {
                    id: 2,
                    name: "《你不知道的JS(上卷)》",
                    price: 43,
                    count: 1,
                },
                {
                    id: 3,
                    name: "《你不知道的JS(中卷)》",
                    price: 59,
                    count: 1,
                },
                {
                    id: 4,
                    name: "《你不知道的JS(下卷)》",
                    price: 73,
                    count: 1,
                }
            ],
            newBook: {
                name: "",
                price: '',
                count: ''
            },
            newBookName: '',
            bookName: "",
            showAdd: false,
            select: false
        }
    },
    methods: {
        formatPrice(price) {
            return "$" + price
        },
        decrement(index) {
            console.log("点击-", index);
            this.books[index].count--

        },

        increment(index) {
            console.log("点击+", index);
            this.books[index].count++
        },

        remove(index) {
            this.books.splice(index, 1)
        },
        addBook() {
            if (this.newBook.name == "") {
                alert("书名不可为空!请重新输入")
                return null
            }
            else if (this.newBook.price == null) {
                alert("价格不可为空!请重新输入")
                return null
            }
            else if (this.newBook.price <= 0) {
                alert("价格不合法！请重新输入")
                return null
            }
            this.books.push({
                id: this.books.length + 1,
                name: this.newBook.name,
                price: this.newBook.price,
                count: 1
            });
            this.newBook = {
                name: "",
                price: '',
                count: ''
            };
            this.newBookcount = 1
            this.showAdd = false;
        }
    }
}
</script>

<style scoped>

</style>