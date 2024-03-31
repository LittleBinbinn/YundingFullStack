<template>
    <div class="class">
        <h2>总价：{{ formatPrice(totalPrice) }} 当前选中书籍：{{ bookName }}</h2>
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
                <tr v-for="(item, index) in books" :key="item.id" :class="{ active: index === currentIndex }"
                    @click="selectBook(index)">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td> {{ formatPrice(item.price) }}</td>
                    <td>
                        <button :disabled="item.count <= 1" @click="decrement(index, item)">-</button>
                        {{ item.count }}
                        <button @click="increment(index, item)">+</button>
                    </td>
                    <td>
                        <button @click="remove(index, item)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    emits: [
        "dec",
        "inc",
        "rem"
    ],
    data() {
        return {
            currentIndex: -1,
            bookName: ''
        }
    },
    props: {
        books: {
            type: Array
        }
    },
    methods: {
        formatPrice(price) {
            return "$" + price
        },
        decrement(index) {
            this.$emit('dec', index)
        },
        increment(index) {
            this.$emit('inc', index)
        },
        remove(index) {
            this.$emit('rem', index)

        },
        selectBook(index) {
            this.currentIndex = index
            this.bookName = this.books[index].name
        }

    },
    computed: {
        totalPrice() {

            let price = 0
            for (const item of this.books) {
                price += item.price * item.count
            }
            return price
        }
    }
}
</script>

<style scoped>
.active {
    background-color: orange;
}

table {
    border-collapse: collapse;
}

thead {
    background-color: aliceblue;
}

th,
td {
    border: 1px solid #aaa;
    padding: 8px 16px;
}
</style>