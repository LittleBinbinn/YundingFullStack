<template>
   
    
         <tr v-for="(item, index) in books " :key="index" @click="itemClick(index)"
                :class="{ active: index === currebtIndex }">
                <td>{{ index + 1 }}</td>
                <td>《{{ item.name }}》</td>
                <td>￥{{ item.price }}</td>
                <td>
                    <button @click="decrement(index, item)" :disabled="item.count <= 1">-</button>
                    {{ item.count }}
                    <button @click="increment( index)">+</button>
                </td>
                <td>
                    <button @click="removeBook(index, item)">移除</button>
                </td>

          </tr>
    
      
       
        

  



</template>
<script>
export default {
    data() {
        return {
            currebtIndex: -1,
           
        }
    },
    props: ["books"],
    emits:['increment','decrement','remove'],

    methods: {
        itemClick(index) {
            this.currebtIndex = index
            console.log(this.currebtIndex)
        },
       
          increment(index) {
         
                this.$emit("increment", index)
            
        },
         decrement(index,item) {
         
                this.$emit("decrement", index)
            
        },
        
        removeBook(index, item) {
              this.$emit("remove", index);
        }

    }

}
</script>
<style scoped>
.active{
    background-color: burlywood;
}
</style>