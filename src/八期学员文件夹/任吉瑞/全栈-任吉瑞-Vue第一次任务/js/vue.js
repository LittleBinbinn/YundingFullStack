const app = Vue.createApp({
    data () {
        return {
            message: "",
            word: ["你好", "hello", "123"],
            isActive:false
        }
    },
    methods: {
        Add() {
            if (this.message != "") {
                this.word.push(this.message);
            }
                
            

            console.log(this.word);
            let number = 0;
            for (let a = 0; a < this.word.length; a++){
                number = 0;
                for (let b = 1; b < this.word.length; b++){
                    if (this.word[a] == this.word[b]) {
                        number++;
                        if (number >= 4) {
                            this.isActive = true;
                        }
                        else {
                            this.isActive = false;
                        }
                    }
                }
            }
        },
        Delete() {
            this.word.pop();
            let number = 0;
            for (let a = 0; a < this.word.length; a++){
                number = 0;
                for (let b = 1; b < this.word.length; b++){
                    if (this.word[a] == this.word[b]) {
                        number++;
                        if (number >= 4) {
                            this.isActive = true;
                        }
                        else {
                            this.isActive = false;
                        }
                    }
                }
            }

        }
    }
});
app.mount('#app');