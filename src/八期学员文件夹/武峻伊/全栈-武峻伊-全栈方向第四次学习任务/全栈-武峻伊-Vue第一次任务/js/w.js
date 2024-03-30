const app = Vue.createApp({
    data(){
        return{
            word:'',
            wordsinput:[],
            isActive:false
        }
    },
    methods: {
        Enter(word){
            if(word != ''){
                this.wordsinput.push(word);
                this.word = '';
                if(this.wordsinput.length > 5){
                    this.isActive = true;
                }
            }

        },
        addwords:function(){

            if(this.wordsinput.length > 5){
                this.isActive = true;
            }else{
                if(this.word != ''){
                    this.wordsinput.push(this.word);
                    this.word = '';
                }

            }

        },
        deleteword:function(){
            const lastword = this.wordsinput.pop();
            if(lastword){
                console.log('删除成功');
                if(this.wordsinput.length <= 5){
                    this.isActive = false;
                }
            }else{
                alert('没有单词可以删除了！');
            }
        }

    }
})
app.mount("#app")