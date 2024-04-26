<template>
    <tr style="height: 40px;" border="2" @click='ChangeColor' :class="ClassName">
        <td class="td1" style="width: 70px;">{{index+1}}</td>
        <td class="td2" style="width: 300px;">{{trans.BookName}}</td>
        <td class="td3" style="width: 90px;">{{trans.price}}</td>
        <td class="td4" style="width: 100px;">
            <button @click="decreaseQuantity">-</button>
            &nbsp;<span id="quantity">{{number}}</span>&nbsp;
            <button @click="increaseQuantity">+</button>
        </td>
        <td class="td5" style="width: 90px;"><button @click='deleteBody'>移除</button></td>
    </tr>
</template>
<script>
export default {
    name:'TableBody',
    data(){
        return {
            number:1,
            ClassName:'',
            sum:'',
            isFalg:false,
            thisIndex:' ',
            sums:0,
            zzprice:0
        }
    },
    props:['trans','getClick','index','getNumber','deleteBook','deleteNumber','removePrice'],
    methods:{
        decreaseQuantity(){
            this.zzprice = this.trans.price
            if (this.number > 0) {
                this.number = this.number - 1
            }else{
                this.zzprice = 0
            }
            this.sums = parseInt(this.zzprice)
            //console.log('-',this.sums)
            this.deleteNumber(this.sums)
        },
        increaseQuantity(){
            this.number = this.number + 1
            this.sums = parseInt(this.trans.price)
            //console.log('+',this.sums)
            this.getNumber(this.sums)
        },
       ChangeColor(e){
             this.ClassName = ''
             if(e.target.value == undefined){
                 this.ClassName = 'selected'
                 this.thisIndex = this.index+1
                 this.getClick(this.trans.BookName)
                // console.log(this.thisIndex)
             }else{
                this.ClassName = ''
             }
            // this.getClick(this.trans.BookName)
        },
        deleteBody(){
            //console.log("index",this.index+1)
            this.deleteBook(this.index+1)
            this.removePrice(this.number*this.trans.price)
            console.log(this.number*this.trans.price)
        },
    },
    computed:{
        computing(){
            //console.log("this.number:", this.number);
            //console.log("this.trans.price:", this.trans.price);
            return this.number *  this.trans.price
        }
    },
    watch:{
        computing(newVal){
            this.sum = newVal
            //console.log("this.sum",this.sum)
        },
     // number:{
      //      immediate:true,
       //     handler(val){
               // this.sums = (val-1)*this.trans.price
               // this.getNumber(this.sums)
         //   }
           
      //  },
     //sum(){
        //this.deleteNumber(this.sums)
       // this.getNumber(this.sums)
     //}
    },
    mounted(){
        console.log('this.number',this.number)
    }
}
</script>
<style scoped>
    .selected {
            background-color: pink;
        }
    
</style>