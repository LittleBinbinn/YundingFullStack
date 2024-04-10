<template>
    <li  :class="beclick" @click="itemSelect($event,item)">
        <div >{{item.id}}</div>
        <div>
        <input 
        type="text" 
        :readonly="item.isNew?false:true"
        v-model="newdata.newName"
        class="name"
        :class="item.isNew?'inputStart':'inputEnd'"
        ></div>
        <div>
        <span v-text="item.isNew?'':'￥'"></span>
        <input 
        type="text" 
        :readonly="item.isNew?false:true"
        v-model="newdata.newPrice"
        class="price"
        :class="item.isNew?'inputStart':'inputEnd'"
        ></div>
        <div>
            <button @click="itemjia($event,item)">+</button>
            {{item.num}}
            <button @click="itemjian($event,item)">-</button>
            </div>
        <div>
            <button @click='itemDelate($event,item)'>移除</button>
        </div>
    </li>
</template>

<script>
import {computed,reactive,watch} from 'vue'
export default {
    name:'myItem',
    props:['jia','jian','item','delate','select','edit'],
    setup(props) {
        let newdata = reactive({
            newName:props.item.name,
            newPrice:props.item.price,
            newNum:props.item.num,
        })


        const itemDelate = function(event,item){
            props.delate(item);
        }
        
        const itemSelect = function(event,item){
            // console.log(event.currentTarget);
            // console.log(bkgd);
            props.select(item)
        }

        let beclick = computed(()=>{
            if(props.item.now==true) return 'select';
            else return ''
        })


        //方法
        let itemjia = function(event,item){
            props.jia(item)
        }

        let itemjian = function(event,item){
            props.jian(item)
        }


        watch(newdata,()=>{
            console.log(newdata.newPrice);
            props.edit(newdata.newName,newdata.newPrice,newdata.newNum);
        },{immediate:true})




        return {
            itemDelate,
            itemSelect,
            itemjia,
            itemjian,
            beclick,
            newdata,



            

        }
    }
}

</script>

<style>
li {
    width: 1000px;
    height: 30px;
    display: grid;
    grid-template-columns: 100px 400px 100px 200px 200px;
}

li div {
    position: relative;
    height: 30px;
    border: 1px solid #000;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    
}

.select {
    background-color: orange;
}

.inputEnd{
    
    border: none;
    outline: none;
    font-size: 18px;
    background-color: transparent;
}

.inputStart{
    font-size: 18px;
    background-color: transparent;
}

.name{
    width: 100px;
}

.price {
    width: 10px;
}



</style>