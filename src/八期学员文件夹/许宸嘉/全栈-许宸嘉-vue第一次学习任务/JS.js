const app = Vue.creatApp(
    {
        el:'#app',
        data: 
        {
            nword:'',
            wordList:[],
            iword: '',
            wordColor: '',
            showWarning: false,
        },
        methonds:
        {
        addWord () {  
    if (this.nword.trim() !== '') {  
        this.wordList.push(this.nword);  
        this.nword = '';  
        this.updateWordColor();
    }  
},  
        deleteWord() {
            if (this.wordList.length > 0) {
                this.wordList.pop();
                this.updateWordColor();
            }
        },
        updateiword() {
            this.iword = this.nword;
        },
        updateWordColor() {
            if (this.wordList.length > 5) {
                this.wordColor = 'red';
                this.showWarning = true;
                                                                                                                                                                                                             } else {
                this.wordColor = '';
                this.showWarning = false;
            }
        }
        }
    }
)
app.mount("#app")