<template>
<div>
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
                <tr v-for = "( item,index ) in books" :key="item.id" @click="selectBook(index)" :class="{active: index === currentIndex}">
                <td > {{ index + 1 }}</td>
                <td>{{item.name}}</td>
                <td>{{formatPrice(item.price)}}</td>
                <td>
                    <button :disabled="item.count < 1" @click="decrease(index)">-</button>
                    {{item.count}}
                    <button @click="increase(index)">+</button>
                </td>
                <td>
                    <button @click="removeBook(index)">移除</button>
                </td>
            </tr>
            <!-- <tr v-if="showAdd" :key="`editing-row`">  
                <td colspan="4">  
                    <label>{{ books.length + 1 }}</label>  
                    <input type="text" v-model="newBook.name" placeholder="书名" required />  
                    <input type="number" v-model="newBook.price" placeholder="价格" required />  
                    <input type="number" v-model="newBook.count" placeholder="数量" required />    
                </td>  
            
            </tr> -->
            </tbody>
        </table>
</div>
</template>

<script >
  export default{
    name:'AppContent',
    props:{
        books:{
            type:Array,
            required: true
        },
        currentIndex:{
            type:Number,
            required:true
        },
        showAdd:{
            type:Boolean,
            required:true
        },
        
    },
    data: function () {
        return {            
            // currentIndex: -1,
            // currentBook:'',
        };
    },
    methods: {
        selectBook(index) {  
            // 发射自定义事件，并传递选中的书籍索引  
            this.$emit('book-selected', index);  
        },  
        formatPrice(price) {
            return "￥" + price
        },
        decrease(index) {
            this.books[index].count--
            
        },
        increase(index) {
            this.books[index].count++
        },
        removeBook(index) {
            this.books.splice(index,1)
        },     
            
        
        }
  }

</script>



<style scoped>
    table{
    border-collapse: collapse;
}
thead{
    background-color: #cac5c5;
}
th,td{
    border: 1px solid #4a4848;
    padding: 8px 16px;
}
.active{
    background-color: rgb(233, 159, 68);
}
</style>