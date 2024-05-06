<template>
    <ul>
        <keep-alive>
            <router-link v-for='m in list' :to="`/home/choice?target=${m.content}`" ><li>{{m.content}}</li></router-link>
        </keep-alive>
    </ul>
    <input type="text" placeholder="请输入事项" @keydown.enter="addlist" v-model="inputValue">
</template>
<script setup name="Lists" lang="ts">
import { onBeforeUnmount, reactive ,ref} from 'vue';
import { useRouter } from 'vue-router';
const list = reactive([
        {content:'吃饭'},
        {content:'睡觉'},
        {content:'打豆豆'}
])
const router = useRouter()
var inputValue = ref('')

function addlist(){
   if(inputValue.value.trim()){
    list.push({ content: inputValue.value })
   }
   inputValue.value = ''
}
onBeforeUnmount(()=>{
    console.log('被销毁')
})

</script>