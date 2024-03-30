const app = new Vue({
    el: '#app',
    data: {
        inputWord: '',
        wordList: [],
        warning: false,
        wordListColor: 'black'
    },
    methods: {
        addWord() {
            if (this.inputWord.trim() === '') {
                //如果没输入单词只是摁空格的话，就不往列表里添加
                return;
            }
            //将单词添加到单词列表
            this.wordList .push(this.inputWord);
            //清空输入框
            this.inputWord = '';
            if (this.wordList.length > 5) {
                this.wordListColor = 'red';
                this.warning = true;
            } else {
                this.wordListColor = 'black';
                this.warning = false;
            }
        },
        deleteWord() {
            //清除单词列表的最后一个单词并改变原数组
            this.wordList.pop();
            //如果删完单词列表中单词数目>5,将红色提示显示;若已经<5了，变回原本的颜色，隐藏红色提示
            if (this.wordList.length > 5) {
                this.wordListColor = 'red';
                this.warning = true;
            } else {
                this.wordListColor = 'black';
                this.warning = false;
            }

        }
    }
})
