<template>
    <div>
        <ul>
            <li v-for="(item,index) in msgList" :key="index" @click="getSelect(item)">● {{ item }}</li>
        </ul>
        <input type="text" v-model="msg" v-on:keyup.enter="addMsg">
    </div>
</template>

<script>
export default {
    data () {
        return {
            msgList: ["吃饭","睡觉","okokok"],
            msg:''
        }
    },
    methods: {
        addMsg() {
            if (this.msg) {
                this.msgList.push(this.msg);
                this.msg = '';
            }
        },
        getSelect(item) {
            this.$router.push({path:'/home/select',query:{item:item}})
        }
    }
}
</script>

<style>

</style> 