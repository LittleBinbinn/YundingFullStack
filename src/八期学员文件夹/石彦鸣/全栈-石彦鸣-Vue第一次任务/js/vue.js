const app = Vue.createApp({
    data() {
        return {
            wordInput: "",
            words: [],
        }
    },
    methods: {
        add: function () {
            this.words.push(this.wordInput);
        },
        del: function () {
            this.words.pop();
        },
        getclasses: function () {
            if (this.words.length > 5) {
                return {
                    less: false,
                    more: true,
                }
            } else {
                return {
                    less: true,
                    more: false,
                }
            }
        },
        get: function () {
            if (this.words.length > 5) {
                return {
                    visable: true,
                    disvisable: false
                }
            } else {
                return {
                    visable: false,
                    disvisable: true
                }
            }
        }


    }

})
app.mount("#app")