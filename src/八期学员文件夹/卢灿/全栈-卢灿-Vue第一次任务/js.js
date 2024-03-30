const app = Vue.createApp({
    data() {
        return {
            message: "",
            word: [ ],
            isActive: false
        }
    },
    methods: {
        Add() {
            if (this.message != "") {
                this.word.push(this.message);
            }

            console.log(this.word);
        },

        Delete() {
            this.word.pop();
        }
    }
    });
app.mount('#app');