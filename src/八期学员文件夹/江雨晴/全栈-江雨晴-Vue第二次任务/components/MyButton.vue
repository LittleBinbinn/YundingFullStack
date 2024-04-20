<template>
    <p><button @click='AddBooks' v-if='showButton1'>添加</button>
    <button v-if='hiddButton3' @click="hiddButton2">确定</button><button v-if='showButton2' @click='hiddButton1'>取消</button>
    </p>
</template>
<script>
export default {
    name:'MyButton',
    props:['addbooks','debooks','getinput','getinputprice','getAddBook','getNumber','inputnumber','transNumber'],
    data(){
        return {
            changed:'',
            showButton1:true,
            showButton2:false,
            hiddButton3:false,
            zzinputnumber:0
        }
    },
    methods:{
        AddBooks(){
            this.showButton1 = false
            this.showButton2 = true
            this.changed = true
            this.hiddButton3 = true
            this.addbooks(this.changed)
            //console.log('@'+this.changed)
        },
        hiddButton1(){
            this.showButton2 = false
            this.hiddButton3 = false
            this.showButton1 = true
            this.changed = false
            this.addbooks(this.changed)
        },
        hiddButton2(){
            //console.log('haha@',this.getinput)
            if(!this.getinput.trim()){
                return alert('书名输入不能为空哦')
            }
            if(!this.getinputprice.trim()){
               return alert('价格不能为空哦')
            }else if(this.getinputprice <=0){
                return alert('价格必须大于0哦')
            }
            this.getNumber(this.getinputprice)
            var newbook = {id:'',BookName:this.getinput,price:this.getinputprice}
            this.getAddBook(newbook)
            this.changed = false
            this.addbooks(this.changed)
            this.hiddButton3 = false
            this.showButton2 = false
            this.showButton1 = true

            this.zzinputnumber = this.inputnumber
            console.log(this.inputnumber)
        },
            
    },
    watch:{
        zzinputnumber(){
            this.transNumber(this.zzinputnumber)
            console.log('this.zzinputnumber',this.zzinputnumber)
        }
    }
}
</script>