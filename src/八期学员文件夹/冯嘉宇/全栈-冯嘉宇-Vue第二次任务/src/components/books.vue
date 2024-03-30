<template>
    <table>
        <thead>
            <tr>
                <td>序号</td>
                <td>书名</td>
                <td>价格</td>
                <td>购买数量</td>
                <td>操作</td>
            </tr>
        </thead>
        <tr v-for="(item, index) in books" key="item" :class="{ change: index === currentIndex }">
            <td>{{ index + 1 }}</td>
            <td v-if="change === true && index >= number">
                <input type="text" v-model="newName">
            </td>
            <td v-else @click="changeColor(index)">{{ item.name }}</td>
            <td v-if="change === true && index >= number">
                <input type="number" id="newbookPrice" v-model="newPrice">
            </td>
            <td v-else>￥{{ item.price }}</td>
            <td>
                <button :disabled="item.count < 1" @click="sub(index)">-</button>
                {{ item.count }}
                <button @click="add(index)">+</button>
            </td>
            <td>
                <button v-if="change === true && index >= number" @click="deleteBook(index)"
                    :disabled="change">移除</button>
                <button v-else @click="deleteBook(index)">移除</button>
            </td>
        </tr>
    </table>
    <div v-if="change === true" class="addBook">
        <button @click="ok">确定</button>
        <button @click="no">取消</button>
    </div>
    <button v-else class="addBook" @click="addBook">添加</button>
</template>
<script>
    export default ({
    data() {
            return {
                books: [
                    {
                        name: "《JavaScript高级程序设计》",
                        price: 126,
                        count: 0
                    },
                    {
                        name: "《你不知道的JS（上卷）》",
                        price: 78,
                        count: 0
                    },
                    {
                        name: "《你不知道的JS（中卷）》",
                        price: 76,
                        count: 0
                    },
                    {
                        name: "《你不知道的JS（下卷）》",
                        price: 64,
                        count: 0
                    }
                ],
                currentIndex: -1,
                change: false,
                newName: "",
                newPrice: 0,
                newCount: 0,
                number: 4,
                currentBook: ""
            }
    },
    methods: {
        sub(index) {
            this.books[index].count -= 1
            this.$emit("sub",this.books)
        },
        add(index) {
            this.books[index].count += 1
            this.$emit("add", this.books)
        },
        deleteBook(index) {
            this.books.splice(index, 1)
            this.number -= 1
        },
        changeColor(index) {
            this.currentIndex = index
            this.currentBook = this.books[index].name
            this.$emit("changeColor",this.currentBook)
        },
        addBook() {
            this.books.push({ name: this.newName, price: this.newPrice, count: this.newCount })
            this.change = true
        },
        ok() {
            this.books[this.books.length - 1].name = "《" + this.newName + "》"
            this.books[this.books.length - 1].price = this.newPrice
            if (this.newName === "") {
                alert("书名不能为空")
            } else if (this.newPrice <= 0) {
                alert("价格应当是正数")
            } else {
                this.change = false
                this.number += 1
            }
            this.newName = ""
            this.newPrice = 0
            this.newCount = 0
        },
        no() {
            this.books.pop()
            this.change = false
        }
    }
})
</script>
<style scoped>
    table {
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid black;
        padding: 8px 16px;
    }
    thead {
        background-color: darkgray;
    }
    .change {
        background-color: darkorange;
    }
    #newbookPrice {
        width:35px;
    }
    .addBook {
        margin-top: 15px;
    }
</style>
