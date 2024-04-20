<template>
    <tr :class="{'selectedtr': isSelected}" @click="selecttr()">
        <td @click="selectedBook()">{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>¥{{ book.price }}</td>
        <td>
            <button @click="decrement(1)">-</button>
            {{ book.count }}
            <button @click="increment(1)">+</button>
        </td>
        <td><button @click="deletetr()">删除</button></td>
    </tr>
</template>
<script>
export default {
            props: {
                book: {
                    type: Object,
                    required: true,
                },
                index: {
                    type: Number,
                    required: false
                },
                isSelected: {
                    type: Boolean,
                    default: false,
                }
            },
            methods: {
                increment(count) {
                    this.$emit('increment', count, this.index)
                },
                decrement(count) {
                    if (this.book.count > 0) {
                        this.$emit('decrement', count, this.index)
                    }
                },
                deletetr() {
                    this.$emit('deletetr', this.index)
                },
                selecttr() {
                    this.$emit('selecttr', this.index);
                },
                selectedBook() {
                    this.$emit('selectedBook', this.index);
                }
            }
        }
</script>
<style scoped>
.selectedtr {
    background-color: palevioletred;
}
</style>