<template>
  <ul>
    <li v-for="(filterAddress,index) in filterAddresses" :key="index" @click="confirmAddress($event)">{{ filterAddress }}</li>
  </ul>
</template>

<script>
export default {
    data(){
        return {
            addresses:['北餐','东餐','东操场','行知楼','行远楼','22号楼','23号楼','北超市','西超市'],
        }
    },
    props:['val'],
    computed:{
        filterAddresses(){
            return this.addresses.filter(ele=>{
                    return ele.indexOf(this.val)!==-1}
                    )
        }
    },
    methods:{
        confirmAddress(e){
            //发送地址
            this.$bus.$emit('sendAddress',e.target.innerText)
        }
    }
}
</script>

<style>
    li{
        list-style: none;
        margin: 6px 0;
        display: block;
        width: 90%;
        border-radius: 3px;
        height: 30px;
        line-height: 30px;
        border:1px black solid
    }
    ul{
        padding: 0;
        height: 120px;
        width: 105%;
        overflow: auto;
    }
    *::-webkit-scrollbar{
        display: none;
    }
</style>