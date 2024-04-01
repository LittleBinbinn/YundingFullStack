const vm = new Vue({
    el: "#app",
    data: {
        yourwords: "脆脆鲨",
        tabale: [],
        arr: ["pop", "wordnumber"],
    },
    methods: {
        addword() {
            if (this.yourwords === "") {
                alert("您未输入单词");
                return;
            }
            this.tabale.unshift(this.yourwords);
            this.yourwords = "";
            if (this.tabale.length > 5) {
                this.arr[0] = this.arr[1];
            }
        },
        remove() {
            if (this.tabale.length <= 5) {
                this.arr[0] = this.arr[2];
            }
            if (this.tabale.length == 0) {
                alert("该单词表没有单词");
                return;
            }
            this.tabale.pop();
        },
    },
});