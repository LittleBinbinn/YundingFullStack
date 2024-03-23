                const app = Vue.createApp({
                        data() {
                            return {
                                newWord: "",
                                words: [],
                                index: 0,
                            }
                        },
                        methods: {
                            addWord() {
                                this.words[this.index] = this.newWord
                                this.index++
                                this.newWord = ""
                            },
                            removeWord() {
                                this.words.pop()
                            }
                        },
                    })
                    app.mount("#app")
