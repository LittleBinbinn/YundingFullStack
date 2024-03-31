<template>
    <tr>
        <td class="number">{{ number }}</td>
        <td><input type="text" @input="updateBookName" :value="value" /></td>
        <td><input type="number" step="1" min="1" class="price" @input="updateBookPrice" :value="value"/></td>
        <td>
            <button @click="count++" >+</button>
            {{count}}
            <button @click="count--" :disabled="count<=0" >-</button>
        </td>
        <td><button disabled>移除</button></td>
    </tr>
</template>

<script>
export default {
    props: ['number', 'factor'],
    data() {
        return {
            bookName: '',
            bookPrice: 0,
            count: 0,
            value:''
        };
    },
    methods: {
        updateBookName(event) {
            this.bookName = event.target.value;
        },
        updateBookPrice(event) {
            this.bookPrice = event.target.value;
        },
        addBook() {
            if (this.bookName && this.bookPrice > 0) {
                this.$emit('add', { name: this.bookName, price: this.bookPrice ,count:this.count});
                this.bookName = '';
                this.bookPrice = 0;
            } else {
                alert("请输入书名和价格");
            }
        }

    },
};
</script>

<style  scoped>

.price{
    height: 15px;
    width: 32px;
}

td,
th {
    border: 1px solid gray;
    padding: 8px;
    text-align: center;
}

</style>