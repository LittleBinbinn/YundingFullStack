<template>
  <div id="app">
    <bookHead :books="books"/>
    <bookCart/>
    <bookAddress></bookAddress>
  </div>
</template>

<script>
import bookHead  from "./components/bookHead.vue";
import bookCart  from "./components/bookCart.vue";
import bookAddress from "./components/bookAddress.vue";
export default {
  name:'App',
  components: {
    bookHead,
    bookCart,
    bookAddress
  },
  //图书数据放在app内
  data(){
    return{
      books:[{name:'嘿嘿',bookID:'3',bookNum:0,bookPrice:1,isEdit:false},{name:'哈哈',bookID:'2',bookNum:0,bookPrice:2,isEdit:false},{name:'嘻嘻',bookID:'1',bookNum:0,bookPrice:3,isEdit:false}]
    }
  },
  
  mounted(){
    this.$bus.$on('sendNewBook',newBookObj=>{
      this.books.unshift(newBookObj)
    })
    this.$bus.$on('rewriteBook',rewriteBookObj=>{
      // 过滤 得到对应元素
      this.books.forEach(ele=>{
        if(ele.bookID === rewriteBookObj.bookID){
          ele.bookPrice = rewriteBookObj.bookPrice
          ele.name = rewriteBookObj.name
          ele.isEdit = false
        }
      })
    })
    this.$bus.$on('removeBook',id=>{
      this.books.forEach((element,index)=>{
        if(element.bookID === id){
          this.books.splice(index,1)
        }
      })
    })
  }
}
</script>
<style>
  *{
      text-align:center;
      margin: 4px auto;
    }
  #app{
    height: 840px;
    width: 800px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    position: fixed;
    background-color: rgb(255, 236, 240);
  }
  
</style>
