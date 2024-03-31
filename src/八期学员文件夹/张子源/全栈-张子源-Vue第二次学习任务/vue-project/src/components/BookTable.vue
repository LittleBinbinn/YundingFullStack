<template>
    <div class="BookTable">
        <div class="nav">
            <h2>总价： 当前选中的书籍：</h2>
        </div>
        <div class="table">
            <table>
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
                    <!-- //从books里面获取到book元素，把book对象直接赋值给名叫book -->
                    <book-list v-for="(book, ) in books" :key="book.id" :book="book" @increment="addBtnClick"
                        @decrement="decreBtnclick"></book-list>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        BookList,
    },
    props: {
        books: {
            type: Array,
            required: true
        }
    },
    addBtnClick(Newcount, bookId) {
        books.value[bookId].count += Newcount
    },
    decreBtnclick(Newcount, bookId) {
        books.value[bookId].count -= Newcount
    }
}
</script>