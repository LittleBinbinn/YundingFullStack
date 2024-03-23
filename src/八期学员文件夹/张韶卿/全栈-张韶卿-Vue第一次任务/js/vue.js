const app = Vue.createApp({
        
            data:function(){
                return{
                    message:'',
                    words:['a','b']
                };
            },

            methods:{
                add(){
                    this.words.push(this.message);
                    console.log(this.words);
                },

                dele(){
                    this.words.pop(this.message);
                    console.log(this.words);
                }

            },

            computed:{
                num(){
                        return this.words.length>5;
                    }
                }

            }

        )


        app.mount("#app")