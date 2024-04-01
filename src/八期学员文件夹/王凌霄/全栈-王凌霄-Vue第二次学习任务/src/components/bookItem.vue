<template>
    <tbody>
        <tr v-for="book in books" :key="book.bookID" @click="intoActive($event,book.name)">
            <td>{{book.bookID}}</td>
            <td v-if="book.isEdit"><input type="text" v-model="bookNewName"></td>
            <td v-if="!book.isEdit">{{book.name}}</td>
            <td v-if="book.isEdit"><input type="text" v-model="bookNewPrice"></td>
            <td v-if="!book.isEdit">{{book.bookPrice}}</td>
            <td><input type="number" name="" id="" v-model="book.bookNum" v-if="!book.isEdit"></td>
            <td v-if="!book.isEdit"><button @click="rewriteBook(book)">编辑</button><button @click="removeBook(book.bookID)" >删除</button></td>
            <td v-if="book.isEdit"><button @click="rewriteConfirm(book)">确认</button><button @click="rewriteCancel(book)" >取消</button></td>
        </tr>
    </tbody>
</template>

<script>

export default {
    name:'bookItem',
    props:['books'],
    data(){
        return {
            isRewrite:false,
            edit:'编辑',
            remove:'删除',
            bookNewName:'',
            bookNewPrice:''
        }
    },
    methods:{
        intoActive($event,name){
            if(document.querySelector('.active')){
                document.querySelector('.active').classList.remove('active')
            }
            if($event.target.parentNode.tagName === 'TR'){
                $event.target.parentNode.classList.add('active')
            }
            else if($event.target.parentNode.parentNode.tagName === 'TR'){
                $event.target.parentNode.parentNode.classList.add('active')
            }
            
            //点击后 讲点记得书记的名字发送给head
            this.$bus.$emit('sendActiveBook',name)
        },
        rewriteBook(book){
            // 进入编辑状态
            book.isEdit = true
        },
        removeBook(id){
            //把id发送给app 删除对应对象
            this.$bus.$emit('removeBook',id)
        },
        rewriteConfirm(book){
            //检查输入
            if(this.bookNewName.trim()&&this.bookNewPrice>0){
                // 依旧是熟悉的包装成对象进行发送
                const rewriteBookObj = {name:this.bookNewName,bookPrice:this.bookNewPrice,bookNum:0,bookID:book.bookID,isEdit:false}
                //把对象发送到app
                this.$bus.$emit('rewriteBook',rewriteBookObj)
            }else{
                alert('请确保书名不为空并且价格大于0')
            }
            
        },
        rewriteCancel(book){
            this.bookNewPrice = ''
            this.bookNewName = ''
            book.isEdit = false
        }

    },
    // 通过监视属性实现每本书的购买数量不得低于0
    watch:{
        books:{
            deep:true,
            handler(){
                this.books.forEach(ele => {
                    if(ele.bookNum<0){
                        alert(`${ele.name}的购买数量不得低于0`)
                        ele.bookNum = 0
                    }
                });
            }
        },
    },
}
</script>

<style>
    input{
        width: 50px;
    }
    .active{
        background-color: rgb(229, 165, 81);
    }
</style>