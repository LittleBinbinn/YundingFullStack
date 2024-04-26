const app = Vue.createApp({
  data() {
    return {
      newWord: "",
      words: [],
    };
  },
  methods: {
    addWord() {
      if (this.newWord !== "") {
        console.log("{{word}}");
        this.words.push(this.newWord);
        this.newWord = ""; //清空数据框中的单词
      }
    },
    deleteWord() {
      console.log("触发");
      this.words.pop();
    },
  },
  computed: {
    showWaring() {
      return this.words.length > 5;
    },
  },
});
app.mount("#app");
