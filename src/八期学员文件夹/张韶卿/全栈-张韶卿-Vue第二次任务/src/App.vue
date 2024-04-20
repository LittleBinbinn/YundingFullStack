<template>
  <div>
    <h2>总价：{{formatPrice(totalPrice)}}</h2>
    <h2>当前选中书籍：{{currentBook}}</h2>
    <AppContent :books="books" @book-selected="xuanzhong" :currentIndex="currentIndex" :showAdd="showAdd" :editingBook="editingBook"></AppContent>
    <AppAdd @add-book="handleAddBook" @add-confirmed="handleAddConfirmed" @add-cancelled="handleAddCancelled"  >
      <div v-if="!showAdd">
      <input type="text" v-model="editingBook.name" placeholder="书名" required />  
      <input type="number" v-model="editingBook.price" placeholder="价格" required />  
      <input type="number" v-model="editingBook.count" placeholder="数量" required />
      </div>
    </AppAdd>
  </div>

</template>

<script >

import AppContent from './components/AppContent.vue'
import AppAdd from './components/AppAdd.vue'

export default{
  name:'App',
  components:{
    AppContent,
    AppAdd
  },
  data: function () {
        return {
            books : [
                {
                    id: 1,
                    name: '《JavaScript高级程序设计》',
                    price: 126,
                    count:1

                },
                {
                    id: 2,
                    name: '《十万个为什么》',
                    price: 78,
                    count:1

                },
                {
                    id: 3,
                    name: '《十万个因为》',
                    price: 76,
                    count:1

                },
                {
                    id: 4,
                    name: '《十万个所以》',
                    price: 74,
                    count:1

                }
            ],
            currentIndex: -1,
            currentBook:'',
            editingBook: {} ,
            showAdd: true
        };
    },
    computed: {
        totalPrice() {
            return this.books.reduce((preValue, item) => {
                return preValue + item.price *item.count
            },0)
    }
    },
    
    methods: {
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
        xuanzhong(index) {
            this.currentIndex = index;
            this.currentBook = this.books[index].name;
            console.log(this.currentBook);
            
        },
        handleAddBook() {  
          this.showAdd = false
        },  
        handleAddConfirmed(){
          // 检查输入是否有效，如果有效则更新书籍数据  
       
        if (this.editingBook.price <  0||this.editingBook.price ==  0) {  
          alert("价格应该为正")  
        } else if(this.editingBook.count < 0){
          alert("数量不能小于0")
        }
        else {   
          this.books.push(this.editingBook);  
        }  
        this.showAdd = true;  
        this.editingBook = {};  
      
      console.log("确定")
    },
        handleAddCancelled(){
          this.showAdd = false;  
          this.editingBook = {}; 

        }
    
    
        
    }
}
    
</script>



<style scoped>

</style>
