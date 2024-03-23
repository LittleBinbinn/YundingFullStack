const app = Vue.createApp({
            
    data: function(){
        return{
            newItem:'',
            items: [],
        }
    },
    methods:{
        increment(){
            if(this.newItem){
                this.items.push(this.newItem);
                this.newItem='';
            }
        },
        decrement(){
            if(this.items.length>0){
                this.items.splice(this.items.length - 1, 1);
            }
        }
    }
    
});
app.mount("#app");