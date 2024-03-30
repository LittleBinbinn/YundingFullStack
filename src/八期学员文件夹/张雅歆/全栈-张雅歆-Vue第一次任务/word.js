new Vue({
    el: '#app',
    data: {
        newWord: '',
        wordList: []
    },
    methods: {
        addWord: function () {
            if (this.newWord.trim()) { // 使用 trim() 去除首尾空格    
                this.wordList.push(this.newWord);

            }
        },
        removeWord: function () {
            if (this.wordList.length > 0) {
                this.wordList.pop();
            }
        }
    }
});
