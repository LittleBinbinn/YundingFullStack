<template>
<div class="newTable">
    <div class="new">
            <form v-if="showTable">
                <label for="bookTitle">书名：</label>
                <input type="text" id="bookTitle" v-model="newBook.book" required>
                <label for="bookPrice">价格：</label>
                <input type="number" id="bookPrice" v-model="newBook.price" required>
                <button @click="ok">确认</button>
                <button @click="no">取消</button>
            </form>
    </div>
    <button @click="showTable = true" v-if="!showTable">添加</button>
</div>

</template>

<script>
export default {
    props:{
        books:{
            type:Array,
            //default: () => []
            default(){}
        },
    },
    data(){
        return{
            showTable: false,
            newBook:{
                    book:'',
                    price: '',
                    count: 1
                }
        }
    },
    methods: {
        ok() {
                console.log(books)
                if (this.newBook.book && this.newBook.price) {
                    const newBook = {
                        id: this.books.length + 1,
                        book: this.newBook.book,
                        price: this.newBook.price,
                        count: 1
                    };
                    // this.books.push(newBook);
                    this.$emit("add",newBook)
                    this.clear();
                } else {
                    alert('请填写书名和价格！');
                }  
        },
        no(){
                this.clear()
        },
        clear(){
            this.newBook.book = '';
            this.newBook.price = '';
            this.showTable = false;
        },

    }
}
</script>

<style>

</style>