<template>
  <div>
    <table border="2">
        <TableHead></TableHead>
        <TableBody v-for="(Book,index) in books" :key='index' :trans='Book' :index='index' :getClick='getClick' :getNumber='getNumber' :deleteBook='deleteBook'
        :deleteNumber='deleteNumber' :removePrice='removePrice'
        ></TableBody>     
        <TableAdd v-if="changed" :length='length' :deleteBook='deleteBook' :getInput='getInput' :getInputPrice='getInputPrice' :getNumber='getNumber' :deleteNumber='deleteNumber' :removePrice='removePrice' :inputNumber='inputNumber' :transnumber='transnumber'></TableAdd> 
    </table>
  </div>
</template>
<script>
import TableHead from './TableHead.vue';
import TableBody from './TableBody.vue';
import TableAdd from './TableAdd.vue'

export default {
    name: "Myform",
    props:[
      'books',
      'changed',
      'deleteBook',
      'length',
      'getClick',
      'getNumber',
      'getInput',
      'getInputPrice',
      'deleteNumber',
      'removePrice',
      'inputNumber',
      'transnumber'
    ],
    data(){
      return {
        change:false,
        i:'',
        getclick:'',
      }
    },
    components:{TableHead,TableBody,TableAdd},
};
</script>
<style>
table {
    border-collapse: collapse;
    text-align: center;
}
</style>