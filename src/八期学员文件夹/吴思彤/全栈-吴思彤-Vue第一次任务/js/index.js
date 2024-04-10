const app = Vue.createApp({
    data() {
        return {
            word: "",
            words: [],
        }
    },
    methods: {
        add() {
            this.words.push(this.word);
        },
        del() {
            this.words.pop();
        }
        }

})
app.mount("#app")