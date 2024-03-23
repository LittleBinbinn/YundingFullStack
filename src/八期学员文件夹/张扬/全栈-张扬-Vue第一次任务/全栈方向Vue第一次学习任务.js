const vm = new Vue({
  el: "#app",
  data: {
    word: "",
    list: [],
    classArr: ["pop", "wordList"],
  },
  methods: {
    add() {
      if (this.word === "") {
        alert("您输入的单词为空");
        return;
      }
      this.list.unshift(this.word);
      this.word = "";
      if (this.list.length > 5) {
        this.classArr[0] = this.classArr[1];
      }
    },
    remove() {
      if (this.list.length <= 5) {
        this.classArr[0] = this.classArr[2];
      }
      if (this.list.length == 0) {
        alert("单词表已经空了！");
        return;
      }
      this.list.pop();
    },
  },
});
