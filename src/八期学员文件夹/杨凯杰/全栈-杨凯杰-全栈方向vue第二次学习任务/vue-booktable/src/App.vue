<template>
    <div>
        <h1>
            总价:{{ priceTotal }} 当前选中书籍:{{ chooseBook }}
        </h1>

        <table border="1">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>书名</th>
                    <th>价格</th>
                    <th>购买数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, index) in books" :key="book.id" @click="selectedBook(book)"
                    :class="{ selected: book === selectedBook }">
                    <td>{{ index + 1 }}</td>
                    <td v-if="!book.changing">{{ book.topic }}</td>
                    <td v-else><input v-model.trim="book.topic" type="text"> </td>
                    <td>{{ book.changing ? book.price : `￥${book.price}` }}</td>
                    <td>
                        <button @click="decreaseQuantity(book)">-</button>
                        <span>{{ book.quantity }}</span>
                        <button @click="increaseQuantity(book)">+</button>
                    </td>
                    <td>
                        <button @click="removeBook(index)"></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="addBook">添加</button>
        <button v-if="book.changing" @click="ensureBook(book)">确认</button>
        <button v-if="book.changing" @click="cancelBook(book)">取消</button>
    </div>
</template>

<script>



export default {
    name: 'BookList',
    data() {
        return {
            books: [],
            nextId: 1,
        }
    },
    methods: {

        addBook() {
            const newBook = {
                id: this.nextId++,
                topic: '',
                price: 0,
                quantity: 1,
                changing: true,
            };
            this.books.push(newBook);
        },
        removeBook(index) {
            this.books.splice(index, 1);
        },
        increaseQuantity(book) {
            book.quantity++;
        },
        decreaseQuantity(book) {
            if (book.quantity > 1) {
                book.quantity--;
            }
        },
        ensureBook(book) {
            if (book.topic.trim() === '' || book.price === 0) {
                alert('书名不能为空且价格不能为0');
                return;
            }
            book.topic = `《${book.topic.trim()}》`
            book.changing = false;
        },
        cancelBook(book) {
            if (book.id === this.nextId - 1) {
                this.removeBook(this.books.length - 1);
                this.nextId--;
            } else {
                book.changing = false;
            }
        },
        chooseBook(book) {
            this.selectedBook = book;
            this.chooseBook = book.topic;
        }

    }, computed: {
        priceTotal() {
            return this.books.reduce((acc, book) => acc + book.price * book.quantity, 0);
        }
    }
}
</script>
<style>
.selected {
    background-color: orange;
    /* 选中行的背景颜色 */
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

button {
    margin-right: 5px;
}
</style>