<script setup>
import { ref, onMounted } from 'vue'  
import { useRoute } from 'vue-router'  
const showtext = ref('')  
const route = useRoute()  
onMounted(() => {    
    let id = route.params.textshow
    if (id === ':textshow') {
        id = ''
    }
    showtext.value = id  
    //console.log(showtext.value)    
})    
</script>

<template>
    <div>
        <h3>宁选择的是：{{ showtext }}</h3>
    </div>
</template>

<style scoped>
h3 {
    width: 500px;
    position: relative;
    left: 500px;
}
</style>