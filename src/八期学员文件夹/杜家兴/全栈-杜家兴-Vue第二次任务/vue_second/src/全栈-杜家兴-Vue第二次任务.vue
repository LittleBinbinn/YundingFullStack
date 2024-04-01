<template>
    <div>
        <h2>当前选中的书籍：{{ book }}</h2>
        <show-books @bookName="showName" @allPrice="showPrice" @indexBooks="indexShow"
            :bookInfo="send ? addBookinformation : null">
            <tr :class="{none : state}">
                <td>{{ number }}</td>
                <td><input type="text" class="name" v-model="bookName"></td>
                <td><input type="text" class="price" v-model="bookPrice"></td>
                <td></td>
                <td></td>
            </tr>
        </show-books>
        <h2>总价格：￥{{ price }}</h2>
        <button class="add" :class="{none : !state}" @click="addInformation()">添加</button>
        <button class="add" :class="{none : state}" @click="bookInformation()">确认</button>
        <button class="add" :class="{none : state}" @click="cancelBook()">取消</button>
    </div>
</template>

<script>
import ShowBooks from './discreteness/book_information.vue';
export default {
    components: {
        ShowBooks
    },
    data() {
        return {
            price: 0,
            book: '',
            number: 0,
            state: true,
            bookName: '',
            bookPrice: 0,
            addBookinformation: {
                backgroundClass: false,
                name: '',
                price: 0,
                number: 0,
                state: true,
            },
            send: false,
        }
    },
    methods: {
        showName(bookname) {
            this.book ='《' + bookname + '》'
        },
        showPrice(price) {
            this.price = price
        },
        indexShow(index) {
            this.number = index + 1
        },
        addInformation() {
            this.state = !this.state
        },
        bookInformation() {
            if (this.bookName === '') {
                alert('书名不能为空！！')
                this.send = false
                return
            }
            if (this.bookPrice < 0) {
                alert('价格不能为负！！')
                this.send = false
                return
            } 
            if (this.bookName !== '' && this.bookPrice >= 0) {
                //console.log('123132')
                this.addBookinformation.name = this.bookName
                this.addBookinformation.price = this.bookPrice
                this.state = !this.state
                this.bookName = '';
                this.bookPrice = 0;  
                this.send = true
            }
        },
        cancelBook() {
            this.bookName = '';
            this.bookPrice = 0;
            this.send = false;
            this.state = !this.state;
        },
    },
}
</script>

<style scoped>
.none {
    display: none;
}

td,tr,th {
    border: 1px solid black;
}

td,th {
    width: 200px;
    height: 60px;
    text-align: center;
}

.price {
    width: 50px;
}

input {
    text-align: center;
}

.add {
    width: 80px;
    height: 30px;
}
</style>




































