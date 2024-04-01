<template>
    <div>
        <h2>历史购买记录</h2>
        <table>
            <thead>
                <tr>
                    <td>购买日期</td>
                    <td>购买书籍及数量</td>
                    <td>支付金额</td>
                    <td>订单编号</td>
                </tr>
            </thead>
            <ownedBook/>
        </table>
    </div>
</template>

<script>
import ownedBook from "./ownedBook.vue";
export default {
    name:'bookCart',
    
    components:{
        ownedBook
    }
}
</script>

<style>

</style>