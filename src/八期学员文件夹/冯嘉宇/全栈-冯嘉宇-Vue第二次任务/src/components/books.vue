<template>
    <tr v-for="(item, index) in books" key="item" :class="{ change: index === currentIndex }">
        <td>{{ index + 1 }}</td>
        <td v-if="change === true && index >= newNumber">
            <input type="text" v-model="newNames" @input="ensure1">
        </td>
        <td v-else @click="changeColor(index)">{{ item.name }}</td>
        <td v-if="change === true && index >= newNumber">
            <input type="number" id="newbookPrice" v-model="newPrices" @input="ensure2">
        </td>
        <td v-else>￥{{ item.price }}</td>
        <td>
            <button :disabled="item.count < 1" @click="sub(index)">-</button>
            {{ item.count }}
            <button @click="add(index)">+</button>
        </td>
        <td>
            <button v-if="change === true && index >= newNumber" @click="deleteBook(index)"
                :disabled="change">移除</button>
            <button v-else @click="deleteBook(index)">移除</button>
        </td>
    </tr>

</template>
<script>
    export default ({
    data() {
            return {
                currentIndex: -1,
                currentBooks: this.currentBook,
                newNumber: this.number,
                newNames: this.newName,
                newPrices: this.newPrice
            }
    },
    props: ["books", "change", "newName", "newPrice","currentBook","number"],
    methods: {
        sub(index) {
            this.books[index].count -= 1
        },
        add(index) {
            this.books[index].count += 1
        },
        deleteBook(index) {
            this.books.splice(index, 1)
            this.newNumber -= 1
            this.$emit("deleteBooks", this.newNumber)
        },
        changeColor(index) {
            this.currentIndex = index
            this.currentBooks = this.books[index].name
            this.$emit('custom-event',this.currentBooks)
        },
        ensure1() {
            this.$emit('ensure1', this.newNames)
        },
        ensure2() {
            this.$emit('ensure2', this.newPrices)
        },
        ensure3() {
            this.newNames = ""
            this.newPrices = 0
        }
    },
    watch: {
        currentBook(newCurrent) {
            this.currentBooks = newCurrent
        },
        number(newNumbers) {
            this.newNumber = newNumbers
        }
    }
})
</script>
<style scoped>
    td {
        border: 1px solid black;
        padding: 8px 16px;
    }
    .change {
        background-color: darkorange;
    }
    #newbookPrice {
        width: 35px;
    }
</style>
