<template>
    <div>
        <h2>总价：{{totalPrice}}，当前选中的书籍：{{selectedBook}}</h2>
        <!-- 表格 -->
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>书籍名称</th>
                    <th>价格</th>
                    <th>购买数量</th>
                    <th >操作</th>
                </tr>
            </thead>
            <tbody>
                <book-item 
                    v-for="(book,index) in books"
                    :key="index"
                    :index="index+1"
                    :name="book.name"
                    :price="book.price"
                    :count="book.count"
                    :selected="selectedIndex===index"
                    :editing="addingIndex===index"
                    @update-count="updateCount(index, $event)"
                    @remove-book="removeBook(index)"
                    @selected-book="selectedBooks(index)"

                    @edited-name="editedName(index, $event)"
                    @edited-price="editedPrice(index, $event)"

                >
                </book-item>
            </tbody>
        </table>
        <div v-if="adding">
            <button @click="addBook">添加</button>
        </div>
        <div v-else>
            <button @click="confirm">确认</button>
            <button @click="cancel">删除</button>
        </div>
    </div>
</template>

<script>
import BookItem from './BookItem.vue'

export default {
    components: {
        BookItem
    },
    data() {
        return {
            selectedBook: "",
            selectedIndex: null,
            adding: true,
            editing: false,
            addingIndex: null,
            books: [
                { name: "书籍1", price: 11, count: "0" },
                { name: "书籍2", price: 12, count: "0" },
                { name: "书籍3", price: 13, count: "0" },
                { name: "书籍4", price: 14, count: "0" }
            ]
        };
    },
    methods: {
        // 更新父组件中的购买数量
        updateCount(index, newCount) {
            this.books[index].count = newCount;
        },
        // 根据索引移除书籍信息
        removeBook(index) {
            this.books.splice(index, 1);
        },
        // 选中书籍
        selectedBooks(index) {
            if (this.selectedIndex == index) {
                this.selectedIndex = null;
            } else {
                this.selectedIndex = index;
                this.selectedBook = this.books[index].name;
            }
        },
        // 点击添加按钮，添加新的书籍信息
        addBook() {
            //按钮的切换
            this.adding = false;
            this.addingIndex = this.books.length;
            this.books.push({ name: "", price: 0, count: 0 });
        },
        //点击确认按钮
        confirm() {
            const newIndex = this.addingIndex;
            const newBook = this.books[newIndex];
            if (newBook.name !== "" && newBook.price > 0) {
                this.adding = true;
                this.addingIndex = null;
            } else {
                alert("请输入合理的书名且书籍价格不能为0!!!");
            }
        },
        // 点击取消按钮
        cancel() {
            this.books.pop();
            this.adding = true;
        },
        editedName(index, newName) {
            this.books[index].name = newName;
        },
        editedPrice(index, newPrice) {
            this.books[index].price = newPrice;
        }
    },
    computed: {
        totalPrice() {
            let total = 0;
            for (let book of this.books) {
                total += book.price * book.count;
            }
            return total;
        }
    }
};
</script>

<style  scoped>
    table {
        border-collapse: collapse;
    }
    th {
        border: 1px solid #000;
        padding: 10px;
    }
</style>
