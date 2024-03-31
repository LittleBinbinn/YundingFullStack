<template>
    <div class="box">
        <table>
            <tr>
                <th v-for="title in th" :key="title">{{ title }}</th>
            </tr>
            <tr v-for="(info,index) in books" :key="index" :class="{ background: info.backgroundClass}"
                @click="changeBackground(index)">
                <td>{{ index+1 }}</td>
                <td>《 {{ info.name }} 》</td>
                <td>￥{{ info.price }}</td>
                <td>
                    <button class="change" @click="changeNumber(2, index), priceAll()" :disabled="info.state">-</button>
                    {{ info.number }}
                    <button class="change" @click="changeNumber(1, index), priceAll()">+</button>
                </td>
                <td>
                    <button class="delete" @click="deleteInformation(index), priceAll()">删除</button>
                </td>
            </tr>
            <slot></slot>
        </table>
        <br>
    </div>
</template>

<script>
export default {
    props: {
        bookInfo: {
            type: Object,
            required: true, 
        }
    },
    watch: {
        'bookInfo.name': {
            handler(newVal) {
                if (newVal !== '' && this.bookInfo.price >= 0) {
                    this.books.push({ ...this.bookInfo });
                    //console.log(this.books)
                }
            },
            deep: true
        },
        books: {
            handler() {
                this.indexTransfer();
            },
            deep: true
        }
    },
    created() {
        this.indexTransfer()
    },
    data() {
        return {
            th: ['序号', '书名', '价格', '购买数量', '操作'],
            books: [
                { backgroundClass: false, name: 'javascript', price: 50, number: 0, state: true },
                { backgroundClass: false, name: 'java', price: 60, number: 0, state: true },
            ],
        }
    },
    methods: {
        changeNumber(kind, index) {
            if (kind === 1) {
                this.books[index].number++
            } else if (kind === 2) {
                this.books[index].number--
            }
            if (this.books[index].number <= 0) {
                this.books[index].state = true
            } else {
                this.books[index].state = false
            }
        },
        deleteInformation(index) {
            this.books.splice(index, 1);  
        },
        changeBackground(index) {
            //console.log(this.books)
            this.books.forEach((book, currentIndex) => {
                if (currentIndex !== index) {
                    book.backgroundClass = false;
                } else {
                    book.backgroundClass = true;  
                }
                if (this.books[index] && this.books[index].name) {
                    this.$emit('bookName', this.books[index].name)
                }
            });
        },
        priceAll() {
            let all = 0;
            this.books.forEach((book) => {
                if (book) {
                    all += book.number * book.price
                }
            })
            this.$emit('allPrice', all)
        },
        indexTransfer() {
            this.$emit('indexBooks', this.books.length)
        },
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.background {
    background: orange;
}

table {
    border-collapse: collapse;
}

td,tr,th {
    border: 1px solid black;
}

td,th {
    width: 200px;
    height: 60px;
    text-align: center;
}

.change {
    width: 30px;
    height: 20px;
}

.delete {
    width: 60px;
    height: 30px;
}

</style>

























