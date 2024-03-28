const vm = new Vue({
    el: "#example",
    data: {
      word: "",
      list: [],
      classArr: ["pop", "wordList"],
    },
    methods: {
      add() {
        if (this.word === "") {
          alert("您没有输入单词哦~");
          return;
        }
        this.list.unshift(this.word);
        this.word = "";
        if (this.list.length > 5) {
          this.classArr[0] = this.classArr[1];
        }
      },
      delete() {
        if (this.list.length <= 5) {
          this.classArr[0] = this.classArr[2];
        }
        if (this.list.length == 0) {
          alert("没有单词可以删除哦~");
          return;
        }
        this.list.pop();
      },
    },
  });

  