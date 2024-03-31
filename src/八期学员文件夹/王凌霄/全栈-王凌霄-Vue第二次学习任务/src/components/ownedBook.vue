<template>
  <tbody>
    <tr v-for="history in buyHistory" :key="history.buyID">
        <td>{{history.buyTime}}</td>
        <td>{{history.buyDetails}}</td>
        <td>{{history.totalMoney1}}</td>
        <td>{{history.buyID}}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
    data(){
        return{
            buyHistory:[{buyTime:'2024-11-22 12:03',buyDetails:'嘿嘿*2',totalMoney1:'2',buyID:1},{buyTime:'2033-12-33 12:03',buyDetails:'哈哈*2 嘻嘻*3',totalMoney1:'23',buyID:2},{buyTime:'2040-02-32 33:12:12',buyDetails:'哈哈*2',totalMoney1:'2',buyID:3},]
        }
    },
    // 
    mounted(){
        this.$bus.$on('sendOrderObj',orderObj=>{
            this.buyHistory.push(orderObj)
        })
    }
}
</script>
    
<style>

</style>