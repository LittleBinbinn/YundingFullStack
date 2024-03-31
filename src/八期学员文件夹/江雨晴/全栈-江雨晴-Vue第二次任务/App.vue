<template>
   <div>
      <MyTitle :sum='sum' :clickId='clickId' :consum='consum' :removeprice='removeprice'></MyTitle>
      <MyForm 
         :books='books' :changed='changed' :deleteBook='deleteBook' :length='length' 
         :getClick='getClick' :getNumber='getNumber' :getInput='getInput' :getInputPrice='getInputPrice' :deleteNumber='deleteNumber'
         :removePrice='removePrice' :inputNumber='inputNumber' :transnumber='transnumber'></MyForm>
      <MyButton :addbooks='addbooks' :debooks='debooks' :getinput='getinput' :getAddBook='getAddBook' :getinputprice='getinputprice' :getNumber='getNumber' :inputnumber='inputnumber' :transNumber='transNumber'></MyButton>
   </div>
</template>
<script>
import MyTitle from './components/MyTitle.vue'
import MyForm from './components/MyForm.vue'
import MyButton from './components/MyButton.vue'
export default ({
   name:'App',
   components: {
    MyTitle,
    MyForm,
    MyButton,
   },
   data(){
      return{
         changed:'',
         books:[
          {id:'1',BookName:'《JavaScript高级程序设计》',price:'126',number:''},
          {id:'2',BookName:'《你不知道的JS(上卷)》',price:'78',number:''},
          {id:'3',BookName:'《你不知道的JS(中卷)》',price:'76',number:''},
          {id:'4',BookName:'《你不知道的JS(下卷)》',price:'64',number:''},
        ],
        length:'',
        sumprice:'',
        clickId:'',
        getinput:'',
        getinputprice:'',
        getnumber:'',
        getaddbook:'',
        sum:0,
        getnumindex:'',
        consum:0,
        deletenumber:0,
        removeprice:0,
        inputnumber:0,
        transnumber:0
      }
   },
   methods:{
      addbooks(x){
         this.changed = x
      },
      debooks(x){
         this.changed = x
      },
      deleteBook(index){
         //console.log(index)
         //this.books = this.books.filter((book)=> book.id != index)
         this.books.splice(index-1,1)
      },
      getClick(n){
         this.clickId = n
         //console.log('getclick',this.clickId)
      },
      getNumber(x){
         this.getnumber=x
         console.log("x",x)
         this.consum += parseFloat(this.getnumber)
            //console.log('val',newVal)
            console.log('getconsum',this.consum)
      },
      deleteNumber(x){
         this.deletenumber = x
         this.consum -= parseFloat(this.deletenumber)
      },
      getAddBook(x){
         
         this.getaddbook = x
         
         //console.log("x",x)
         this.books.push(this.getaddbook)
      },
      getInput(x){
         this.getinput = x
         //console.log("x",x)
      },
      getInputPrice(x){
         this.getinputprice = x
      },
      sumPrice(){
          this.books.forEach(book =>{
            this.sum += parseInt(book.price)
          })
          //console.log(this.sum)
      },
      removePrice(x){
         this.removeprice = x
      },
      inputNumber(x){
         this.inputnumber = x
         console.log("inputnumber",this.inputnumber)
      },
      transNumber(x){
         this.tansnumber = x
         console.log('this.tansnumber',x)
      }
   },
   watch:{
      books:{
         immediate:true,
         //console.log(this.books)
         handler(){
            this.length = this.books.length+1
            //console.log("length",this.length)
         }   
      },
/*      getnumber:{
         //immediate:true,
         handler(newVal){
            this.consum += parseFloat(newVal)
            //console.log('val',newVal)
            console.log('getconsum',this.consum)
         }
      },
      deletenumber:{
         handler(newVal){
            this.consum -= parseFloat(newVal)
            //console.log('val',newVal)
            //console.log('getconsum',this.consum)
         }
      }*/
   },
   mounted () {
      this.sumPrice()
   }
})
</script>
