<template>
    <tr style="height: 40px;" border="2" @click='ChangeColor' :class="ClassName">
        <td class="td1" style="width: 70px;">{{length}}</td>
        <td class="td2" style="width: 300px;"><input v-model="BookName" v-if='showInput'></td>
        <td class="td3" style="width: 90px;"><input type="number" id="input_number" v-model='price'></td>
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
    name:'TableAdd',
    props:['getInputPrice','length','deleteBook','getInput','getNumber','deleteNumber','removePrice','inputNumber','transnumber'],
    data(){
        return {
            number:1,
            BookName:'',
            price:'',
            ClassName:'',
            showInput:true ,
            sums:0,
            zzprice:0       
        }
    },
    methods:{
        decreaseQuantity(){
            this.zzprice = this.price
            if (this.number > 0) {
                this.number = this.number - 1
            }else{
                this.zzprice = 0
            }
            this.sums = parseInt(this.zzprice)
            //console.log("sums",this.sums)   
            this.deleteNumber(this.sums)
            
        },
        increaseQuantity(){
            this.number = this.number + 1
            this.sums = parseInt(this.price)
            this.getNumber(this.sums)
        },
        ChangeColor(e){
            this.ClassName = ''
            if(e.target.value == undefined){
                this.ClassName = 'selected'
            }  
        },
        deleteBody(){
            this.deleteBook(this.length)
            this.removePrice(this.number*this.price)
            console.log(this.number*this.trans.price)
        },
    },
    watch:{
            BookName(){
                //console.log('name',this.BookName)
                this.getInput(this.BookName)
            },
            price(){
                this.getInputPrice(this.price)
            },
            number(){
                //console.log("number",this.number)
                this.inputNumber(this.number)
                
            }
    },
    }

</script>
<style scoped>
    #input_number{
        width: 40px;
    }
</style>