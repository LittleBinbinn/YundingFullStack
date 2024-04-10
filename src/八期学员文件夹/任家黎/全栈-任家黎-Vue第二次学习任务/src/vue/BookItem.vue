<template>

    <tr :class="{orange:isOrange}">
        <!-- 序号 -->
        <th>{{index}}</th>
        <!-- 书籍名字 -->
        <th @click="selectedBook" v-if="!editing">{{name}}</th>
        <th v-else>
            <input class="name" type="text" v-model="editedName" placeholder="请您输入书名"/>
        </th>
        <!-- 价格 -->
        <th v-if="!editing">¥{{price}}</th>
        <th v-else>
            <input class="price" type="number" v-model="editedPrice" placeholder="0" min="0">
        </th>
        <!-- 购买数量 -->
        <th>
            <button @click="decrease">-</button>
            {{count}}
            <button @click="increase">+</button>
        </th>
        <!-- 删除操作 -->
        <th>
            <button @click="remove">删除</button>
        </th>
            
    </tr>

</template>

<script>
export default {
    data() {
        return {
            count:0,
            isOrange:false,
            editedName: this.name,
            editedPrice: this.price,
        }
    },

    props:{
        index:{
                type: Number,
                default: 1
            },        
        name: {
                type: String,
                default: ''
            },
        price: {
                type: Number,
                default: 0
            },
        selected:{
                type:Boolean,
                default:false
        },
        editing:{
                type:Boolean,
                default:false
        }
    },
    methods: {
        // 增加购买数目
        increase(){
            this.count++;
            this.$emit("update-count",this.count);
        },
        // 减少购买数目
        decrease(){
            if(this.count>0){
                this.count--;
                this.$emit("update-count",this.count);

            }
        },
        // 删除书籍信息
        remove(){
            this.$emit("remove-book")
        },
        // 选中书籍
        selectedBook(){
            this.$emit("selected-book")
        },
    },
    watch:{
        selected(booLean){
            this.isOrange = booLean
        },
        editedName(){
            this.$emit("edited-name",this.editedName)
        },
        editedPrice(){
            this.$emit("edited-price",this.editedPrice)
        }
    }
}
</script>

<style  scoped>
    th {
        border: 1px solid #000;
        /* width: 100px; */
        padding: 10px;
        cursor: pointer;
    }
    .orange {
        background-color: #fd9d16;
    }
    .name{
        width: 100px;
    }
    .price {
        width: 30px;
    }
</style>