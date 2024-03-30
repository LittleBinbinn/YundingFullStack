//1.创建app
const app = Vue.createApp({
    data() {
        return {
            input: "",
            words: [],
            showMessage: false,
            message: '别加了,受不鸟了',
            wordColor: 'black'
        }
    },

    methods: {
        increase() {
            if (this.words.length >= 5) {
                this.showMessage = true;
                this.wordColor = 'red';
            } else {
                this.words.push(this.input);
                if (this.words.length < 5) {
                    this.showMessage = false;
                    this.wordColor = 'black';
                }
            }
        },
        decrease() {
            if (this.words.length > 0) {
                this.words.pop();
                if (this.words.length < 5) {
                    this.showMessage = false;
                    this.wordColor = 'black';
                }
            }
        }
    }
})
//2.挂载app
app.mount("#app")
