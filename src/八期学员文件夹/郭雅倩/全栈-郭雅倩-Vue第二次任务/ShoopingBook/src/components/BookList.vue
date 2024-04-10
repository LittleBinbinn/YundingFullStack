<template>
    <tr
    :class="{'select-row':isSelected}"
    @click="selectRowClick()"
    
    >
    <!-- 判断是否被选中 -->
        <td @click="titleClick()">{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>￥{{ book.price }}</td>
        <td>
            <button @click="increment(1)">+</button>
            {{ book.count }}
            <button @click="decrement(1)">-</button>
        </td>
        <td><button @click="deleteRow()">删除</button></td>
    </tr>
</template>
<script>
export default {
  
    props: {
        book: {
            type: Object,
            required:true,
        },
        index: {
            type: Number,
            required:false
        },
        isSelected: {
            type: Boolean,  
            default: false, 
        }//判断是否选中，初始值是未被选中
    },
    methods: {
        increment(count) {
            this.$emit('increment',count,this.index,)
        },//购买数量加一
        decrement(count) {
            if(this.book.count>0){this.$emit('decrement',count,this.index,)}
            
        },//购买数量减一
        deleteRow() {
            this.$emit('deleteRow',this.index)
        },//删除该行
        selectRowClick() {
            this.$emit('selectRow', this.index);  
        },
        titleClick() {
            this.$emit('titleclick', this.index);
        }//为实现当前选中书籍功能而获取index
        
    }
}
</script>
<style scoped>
.select-row{
    background-color: orange;
}
</style>