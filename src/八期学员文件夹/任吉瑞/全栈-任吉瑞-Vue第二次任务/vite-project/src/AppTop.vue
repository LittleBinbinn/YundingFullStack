<template>
    <div>
        <span>总价：¥{{ tprice }}</span>
        <span>当前选中书籍：{{name}}</span>
    </div>
</template>

<script>
export default {
    props: ['total', 'index'],

    methods: {
        sum() {
            this.price = 0;
            for (let a = 0; a < this.total.length; a++){
                this.tprice+= this.total[a].count * this.total[a].price;
            }
        }
    }, computed: {
        tprice() {
            let totalprice=0
            for (let item of this.total) {
                totalprice += item.count * item.price;
            }
            return totalprice
        },
        name() {
            let choosename=''
            if (this.total.length> 0&&this.index>=0) {
                choosename=this.total[this.index].name
            }
            return choosename
        }
    }
 
        
}
</script>

<style  scoped>

</style>