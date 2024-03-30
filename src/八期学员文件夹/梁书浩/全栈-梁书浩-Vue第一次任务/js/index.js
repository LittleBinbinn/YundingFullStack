const app=Vue.createApp({
    data:function(){
        return{
            message: "你要输入的单词是",
            words:[],
            isActive:false
        }
    },
    methods: {
        add(){
            this.words.push(this.message)
            if(this.words.length>5){
                this.isActive=true
            }
        },
        reduce(){
            this.words.pop()
            if(this.words.length<=5){
                this.isActive=false
            }
        }
    }
})
app.mount("#app")