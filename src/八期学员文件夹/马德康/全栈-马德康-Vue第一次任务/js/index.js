    const app = Vue.createApp({
        data(){
            return {
                words: [],
                newWord: '',
                wordColor: 'black',
                isShow: false
            }
        },
        methods:{
            addNewword(){
                if(this.newWord !== ''){
                    this.words.push(this.newWord)
                    this.newWord = ''
                    this.checkCount()
                }
            },
            checkCount() {
                    if(this.words.length>5){
                        this.wordColor = 'red'
                        this.isShow = true
                    }else if(this.words.length<=5){
                        this.wordColor = 'black'
                        this.isShow = false
                    }
            },
            delWord(){
                this.words.pop()
                this.checkCount()
            }
        }
    })
    app.mount("#app")