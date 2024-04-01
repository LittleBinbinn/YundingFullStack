<template>
    <div>
        <h3>总价：{{sum+consum-desum}} 当前选中的书籍：{{clickId}}</h3>
    </div>
</template>
<script>
export default {
    name:'MyTitle',
    props:['sum','clickId','consum','removeprice'],
    data(){
        return{
            desum:0
        }
    },
    watch:{
        removeprice:{
            immediate:true,
            handler(){
                console.log('desum',this.removeprice)
                this.desum += this.removeprice
            }
        }
    }
}
</script>