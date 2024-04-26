const books = [
    {
        id: 1,
        name: 'JavaScript高级程序设计',
        price: 126,
        count: 1
    },
    {
        id: 2,
        name: '你不知道的js(上卷)',
        price: 78,
        count: 1
    },
    {
        id: 3,
        name: '你不知道的js(中卷)',
        price: 76,
        count: 1
    },
    {
        id: 4,
        name: '你不知道的js(下卷)',
        price: 64,
        count: 1
    }
]
const rows = [
    {
        id:5,
        name1:'',
        price:'',
        count: 1
    }
]
const preValue = 0 ;
const app = Vue.createApp({
    data: function() {
        return {
            books: books,
            currentIndex: -1,
            followName: '',
            rows: rows,
 
        }
    },
    computed: {
        totalPrice(){
            return this.books.reduce((preValue, item) =>{
                return preValue + item.price * item.count
            },0)
        }
    },
    methods:{
        decrement(index){
            this.books[index].count--
        },
        increment(index){
            this.books[index].count++
        },
        formaPrice(price){
            return "￥" + price
        },
        rowClick(index){
            this.currentIndex = index 
            this.followName = this.books[index].name

        },
        removeProgram(index, item){
            this.books.splice(index,1)
        },
        increate(){
            
        },
        strikeOut(index, row){
            this.rows.splice(index,1)
        },
    }
})
app.mount("#app");