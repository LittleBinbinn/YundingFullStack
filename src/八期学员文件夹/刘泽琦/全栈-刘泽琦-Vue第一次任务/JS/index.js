const app = Vue.createApp({
    data() {
        return {
            word: '',
            wordList: []
        }
    },
    methods: {
            addClick() {
                if (this.word) {
                    this.wordList.push(this.word);
            }
        },
            delClick() {
                this.wordList.splice(-1,1)
        },
            isActive() {
                if(this.wordList.length > 5) {
                    return true
                }
            }
        },
})

app.mount('#app')