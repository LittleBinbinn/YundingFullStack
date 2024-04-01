<template>
    <div>
        <h1>
            总价：{{ formatPrice(totalPrice) }}
            您选择的书籍是：{{ bookName }}
        </h1>
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
                <tr v-for="(items, index) in books" :key="items" @click="chooseBook(index)"
                    :class="{ active: index === currentIndex }">
                    <td>{{ index + 1 }}</td>
                    <td>{{ items.name }}</td>
                    <td>{{ formatPrice(items.price) }}</td>
                    <td>
                        <button @click="decrement(index)">-</button>
                        {{ items.count }}
                        <button @click="increment(index)">+</button>
                    </td>
                    <td>
                        <button @click.stop="del(index)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    emits: ["low",'add','dele'],
    data() {
        return {
            currentIndex: -1,
            bookName:''
        }
    },
    props: {
        books: {
            type: Array
        },

    },   
    methods: {
        decrement(index) {
            this.$emit('low',index)
        },
        increment(index) {
            this.$emit('add',index)
        },
        del(index) {
            this.$emit('dele', index)
            // this.currentIndex--
        },
        formatPrice(price) {
            return '￥'+price
        },
        chooseBook(index) {
            this.currentIndex = index
            this.bookName= this.books[index].name
        }
    },
    computed: {
        totalPrice() {
            let price = 0
            for (const item of this.books) {
                price+=item.price*item.count
            }
            return price
        }
    }

}
</script>

<style scoped>
    .active {
        background-color:red;
    }
    table {
        border-collapse: collapse;
        font-size: 30px;
    }

    button {
        font-size: 25px;
    }

    th,td{
        border: 1px solid #aaa;
        padding: 8px 16px;
        text-align: center;
        line-height: 25px;
    }

    thead {
        background-color: #f5f5f5;
    }

</style>