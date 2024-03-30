const container = Vue.createApp({
    data() {
        return {
            word:'',
            summary: [],
            
        }
        
    },
    methods:{
        add(word) {
            this.summary.push(word)//把word加入数组
        },
        deleteWord() {
            this.summary.pop()//适用于数组中删除最后一个元素
        },
        isActive() {
            if(this.summary.length>5){return true}//在函数中进行判断
        }
    },
})
container.mount('.container')