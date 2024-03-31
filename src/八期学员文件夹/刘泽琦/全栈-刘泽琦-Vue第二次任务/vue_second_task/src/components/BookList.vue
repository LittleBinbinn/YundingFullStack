<template>
    <tbody>
    <tr v-for="(item,index) in datas" :key="item.id" @click="bookSelect(index,item.name)" :class="{ active: index === currentIndex }">
        <td> {{ item.id }} </td>
        <td> {{ item.name }}</td>
        <td> {{ formatPrice(item.price) }} </td>
        <td>
            <button @click="subClick(index)">-</button>
            {{ item.count }}
            <button @click="addClick(index)">+</button>
        </td>
        <td>
            <button @click="removeClick(index)">移除</button>
        </td>
    </tr>
    </tbody>
</template>

<script>
    export default {
        props: {
            datas: {
                type: Array,
                required: true
            },
            count: {
                required: true
            }
        },
        emits: ['bookSelect','newCount'],
        data() {
            return {
                currentIndex: null,
            }
        },
        methods: {
            bookSelect(index,name) {
                this.currentIndex = index
                this.$emit('bookSelect',index,name)
            },
            addClick(index) {
                const item = this.datas[index]
                item.count++
                this.$emit('newCount', index, item.count);
            },
            subClick(index) {
                const item = this.datas[index];
                if (item.count > 0) {
                    item.count--;
                    this.$emit('newCount', index, item.count);
                }  
            },
            removeClick(index) {
                this.$emit('removeBook', index);
            },
            formatPrice(price) {
                return "￥" + price
            }
        }
    }
</script>

<style scoped>
    td {
        border: 1px solid #aaa;
        padding: 8px 16px;
    }

    .active {
        background-color: orange;
    }
</style>