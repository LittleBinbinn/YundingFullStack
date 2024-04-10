
const app = Vue.createApp({
    data: function () {
        return {
            word:'',
            wordArray:[],
            isActive:false,
            reminder:" "
        }
    },
    methods:{
        addWord:function(word){
            this.wordArray.push(word)
        },
        removeWord:function(){
            this.wordArray.pop()
        },
        handleClick(word){
            this.wordArray.push(word)
        }
    },
    watch:{
        // 直接侦听数组的长度
        'wordArray.length'(newVal, oldVal) {
            if (newVal >= 5) {
                //控制active称为class名，渲染css
                this.isActive = true
                //输出提示
                this.reminder = "请不要再添加单词啦！"
            }else{
                //取消css渲染
                this.isActive = false
                //清空提示
                this.reminder = ""
            }
        }
        
    }
})
app.mount("#app")