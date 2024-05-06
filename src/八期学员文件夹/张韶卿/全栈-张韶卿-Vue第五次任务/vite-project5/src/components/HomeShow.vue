<template>
    <div>
        <ul>
            <li v-for="(item,index) in lists" :key="index" @click="goToHomeChoice(item)">{{item}}</li>
        </ul>
        <input type="text" placeholder="添加新内容" @input="message=$event.target.value" @keyup.enter="add">  
    </div>
</template>

<script>
export default {
    name: 'HomeShow',
    data:function(){
        return {
            message:'',
            lists:['1','2']
        };
    },
    methods:{
        add(){
            this.lists.push(this.message);
            
            console.log(this.lists);
        },
        
        goToHomeChoice(item) {    
            this.$router.push({ name: 'home-choice', params: { selectedItem: item } });  
        }, 
    },
};
</script>

<style scoped></style>
