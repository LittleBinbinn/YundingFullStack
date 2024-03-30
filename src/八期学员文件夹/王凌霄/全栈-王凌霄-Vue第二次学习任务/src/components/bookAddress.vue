<template>
    <section>
        <h3>收货地址</h3>
        <div >
            <br>
            <span>请选择收货教学楼</span><br>
            <input type="text" name="" id="address" v-model="val">
            <!-- 把关键词传递下去进行模糊匹配 -->
            <addressList :val="val"></addressList>
        </div>
        <div class="tele">
            <br>
            <span>请输入收货人姓名：</span><input type="text" v-model="name" @change="inputName(name)"><br><br>
            <span>请输入收货人电话号码：</span><input type="text" v-model="tele" @change="inputTele(tele)"><br>
            <span class="warning" v-if="nameWrong">收货人姓名有误!姓名应该为两位及以上汉字</span><br>
            <span class="warning" v-if="teleWrong">收货人电话有误!电话应为11位数字</span><br>
            <button @click="addressConfirm">确认收货地址</button>
        </div>
    </section>
</template>

<script>
import addressList from "./addressList.vue";
export default {
    data(){
        return {
            val:'',
            name:'',
            tele:'',
            nameWrong:false,
            teleWrong:false,
        }
    },
    components:{addressList},
    mounted(){
        this.$bus.$on('sendAddress',address=>{
            this.val = address
        })
    },
    methods:{
        inputName(name){
            this.nameWrong = false
            const regName = /[\u4e00-\u9fa5]{2,}/
            if(!regName.test(name)){
                this.nameWrong = true
            }else{
                this.nameWrong = false
            }
        },
        inputTele(tele){
            this.teleWrong = false
            const regTele = /^[0-9]{11}$/
            if(!regTele.test(tele)){
                this.teleWrong = true
            }else{
                this.teleWrong = false
            }
        },
        addressConfirm(){
            if(!this.nameWrong&&!this.teleWrong&&this.val){
                this.$bus.$emit('passAddress',true)
                alert('设置地址成功！')
            }else{
                this.$bus.$emit('passAddress',false)
                alert('您输入的信息有误！请重新检查并填写')
            }
        }
    },
}
</script>

<style scoped>
    div{
        display: inline-block;
        vertical-align: top;
    }
    input{
        width: 200px;
    }
    #address{
        width: 90%;
    }
    .tele{
        text-align: left;
        padding-left: 20px;
    }
    .warning{
        color: crimson;
    }
    section{
        padding: 4px;
    }
</style>