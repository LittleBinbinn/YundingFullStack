<template>
    <div class="showitself">
        <ul v-for="item in items" :key="item">
           <li>
                <router-link 
                :to="
                {
                    path:'/home/choose',
                    query:{title:item}
                }
                ">{{item}}</router-link>
           </li> 
        </ul>

        <input type="text" placeholder="请输入事项" v-model="newItem" @keyup.enter="addItem">
    </div>
</template>

<script setup>
    import {ref,reactive} from 'vue'
    const items= reactive(['吃饭','睡觉','打豆豆'])
    const newItem = ref('')
    function addItem(){
        console.log('damn');
        if(newItem.value.trim() !== ''){
            items.push(newItem.value)
            newItem.value=''
        }
    }
</script>   

<style  scoped>
a{
  text-decoration: none;
  color: black;
}
</style>