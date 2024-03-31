<template>
    <tr v-for="(item,index) in information" @click="choose(index)" :class="{active:this.number==index}">
        <td>
            {{ index+1 }}
        </td>
        <td>
            《{{ item.name }}》
        </td>
        <td>
            ￥{{ item.price }}
        </td>
        <td>
            <button @click="updateCount(1,index)">+</button>
            {{ item.count }}
            <button @click="updateCount(-1,index)" :disabled="item.count<=0">-</button>
        </td>
        <td>
            <button @click="remove(index)" >移除</button>
        </td>
    </tr>
</template>

<script>
    export default {
    props: ["information"],
    data() {
        return {
            number:-1
        }
    },
    methods: {
        updateCount(number, index) {
            this.$emit('update', number, index);
        },
        remove(index) {
            this.$emit('remove', index);
        },
        choose(index) {
            this.$emit('choose', index)
                this.number=index
            }
        }
}
</script>

<style  scoped>
.active{
    background-color: greenyellow;
}
td,th {
    border: 1px solid gray;
    padding: 8px;
    text-align: center;
    }
</style>