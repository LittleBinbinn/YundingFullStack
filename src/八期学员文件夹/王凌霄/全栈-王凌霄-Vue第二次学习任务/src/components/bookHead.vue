<template>
    <div>
        <head>
        <h1>图书购买系统</h1>
        <span>当前需要支付总金额</span><span class="remind">{{ totalMoney }}</span>
        <br>
        <span>您当前选中的图书是</span><span class="remind">{{ activeBook }}</span>
        <br>
        <button @click="addNewBook" v-if="!addBook">点击添加图书</button><br>
        <span>提示:设置地址后才能购买哦</span>
        <div v-if="addBook">
            <span>请输入书名：</span><input type="text" v-model="newBookName">
            <br>
            <span>请输入价格：</span><input type="number" v-model="newBookPrice">
            <br>
            <button @click="addConfirm">确认</button><button  @click="addNewBook">取消</button>
        </div>
    </head>
    <table>
        <thead>
            <tr>
            <td>编号</td>
            <td>书名</td>
            <td>价格</td>
            <td>数量</td>
            <td>操作</td>
            </tr>
        </thead>
        <bookItem :books="books"/>
    </table>
    <button @click="buyConfirm">确认购买</button>
    </div>
    
</template>

<script>

import bookItem from './bookItem.vue'
export default {
    name:'bookHead',
    data(){
        return{
            idStart:4,
            newBookName:'',
            newBookPrice:'',
            activeBook:'',
            addBook:false,
            buyID:4,
            canBuy:false
        }
    },
    methods:{
        addNewBook(){
            this.addBook = !this.addBook
        },
        addConfirm(){
            if(this.newBookName.trim()&&this.newBookPrice>0){
                // 把获取到的数据包装成书籍对象
            const newBookObj = {name:this.newBookName,bookPrice:this.newBookPrice,bookNum:0,bookID:this.idStart,isEdit:false}
            //把对象发送到app
            this.$bus.$emit('sendNewBook',newBookObj)
            this.idStart++
            this.addBook = !this.addBook
            }
            else{
                alert('请确保书名不为空并且价格大于0')
            }
        },
        buyConfirm(){
            // total必须大于0
            // 生成购买时间
            if(this.canBuy){
                if(this.totalMoney>0){
                const time = new Date()
                const year = time.getFullYear()
                const month = time.getMonth()
                const date = time.getDate()
                const hour = time.getHours()
                const minute = time.getMinutes()
                const buyTime = year+'-'+month+'-'+date+' '+hour+':'+minute
                //生成购买详情
                const details = this.books.map(ele=>{
                    return ele.name+'*'+ele.bookNum
                }).join('/')
                console.log(details);
                //包装对象
                const orderObj = {buyTime:buyTime,buyDetails:details,totalMoney1:this.totalMoney,buyID:this.buyID}
                //发送订单对象
                this.$bus.$emit('sendOrderObj',orderObj)
                this.buyID++
                }else{
                    alert('请至少选择一件商品')
                }
            }else{
                alert('请完善身份信息')
            }
        }
    },
    computed:{
        //计算总金额
        totalMoney(){
            return this.books.reduce((previous,current,currentIndex)=>{
                return this.books[currentIndex].bookNum*this.books[currentIndex].bookPrice + previous
            },0)
        }
    },
    components:{
        bookItem
    },
    props:['books'],
    mounted(){
        this.$bus.$on('sendActiveBook',name=>{
            this.activeBook = name
        }),
        this.$bus.$on('passAddress',buer=>{
            this.canBuy = buer
        })
    },
    watch:{
        newBookPrice(){
            if(this.newBookPrice<0){
                alert('图书价格不得低于0')
                this.newBookPrice = 0
            }
        }
    }
}
</script>

<style>
    head{
        display: block;
    }
    .remind{
        color: brown;
    }
    table,tr,td{
        border: 1px black solid;
        padding: 4px;
    }
    table{
        display: block;
        width: fit-content;
        border-collapse: collapse;
        margin: 0 auto;
    }
    tr{
        background-color: blanchedalmond;
    }

</style>