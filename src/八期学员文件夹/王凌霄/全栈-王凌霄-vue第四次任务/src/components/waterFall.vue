<script setup lang="ts">
import {reactive,onMounted} from 'vue'
const totalcolumn = 10
let totalwidth = '1200px'
let columns = Math.floor(parseFloat(totalwidth)/totalcolumn-30)+'px'
let COLUMN = <any[][]>reactive([[],[],[],[],[],[],[],[],[],[]])
let heightlist:number[] = []
let directions:string[] = []
let duration:string[] = []
const list = [
    {
        height: 300,
        background: 'red'
    },
    {
        height: 400,
        background: 'pink'
    },
    {
        height: 500,
        background: 'blue'
    },
    {
        height: 200,
        background: 'green'
    },
    {
        height: 300,
        background: 'gray'
    },
    {
        height: 400,
        background: '#CC00FF'
    },
    {
        height: 200,
        background: 'black'
    },
    {
        height: 100,
        background: '#996666'
    },
    {
        height: 500,
        background: 'skyblue'
    },
    {
        height: 300,
        background: '#993366'
    },
    {
        height: 100,
        background: '#33FF33'
    },
    {
        height: 400,
        background: 'skyblue'
    },
    {
        height: 200,
        background: '#6633CC'
    },
    {
        height: 300,
        background: '#666699'
    },
    {
        height: 300,
        background: '#66CCFF'
    },
    {
        height: 300,
        background: 'skyblue'
    },
    {
        height: 200,
        background: '#CC3366'
    },
    {
        height: 200,
        background: '#CC9966'
    },
    {
        height: 200,
        background: '#FF00FF'
    },
    {
        height: 500,
        background: '#990000'
    },
    {
        height: 400,
        background: 'red'
    },
    {
        height: 100,
        background: '#999966'
    },
    {
        height: 200,
        background: '#CCCC66'
    },
    {
        height: 300,
        background: '#FF33FF'
    },
    {
        height: 400,
        background: '#FFFF66'
    },
    {
        height: 200,
        background: 'red'
    },
    {
        height: 100,
        background: 'skyblue'
    },
    {
        height: 200,
        background: '#33CC00'
    },
    {
        height: 300,
        background: '#330033'
    },
    {
        height: 100,
        background: '#0066CC'
    },
    {
        height: 200,
        background: 'skyblue'
    },
    {
        height: 100,
        background: '#006666'
    },
    {
        height: 200,
        background: 'yellow'
    },
    {
        height: 300,
        background: 'yellow'
    },
    {
        height: 100,
        background: '#33CCFF'
    },
    {
        height: 400,
        background: 'yellow'
    },
    {
        height: 400,
        background: 'yellow'
    },
    {
        height: 200,
        background: '#33FF00'
    },
    {
        height: 300,
        background: 'yellow'
    },
    {
        height: 100,
        background: 'green'
    }]
//封装函数处理 这个函数用于排列图片
const init = ()=>{
    //遍历处理list里面的数据
    for(let i = 0;i<list.length;i++){
        //第一排的
        if(i<totalcolumn){
            //第一排 从左到右 依次添加 
            COLUMN[i].push(list[i])
            heightlist.push(list[i].height+20)
        }else{
            let current = Infinity
            let index = Infinity
            heightlist.forEach((item,i)=>{
                if(current>item){
                    current = item
                    index = i
                }
            })
            //把这个元素添加到最短的那一列
            COLUMN[index].push(list[i])
            //维护高度数组
            heightlist[index]+=list[i].height+10
        }
    }
    for(let m = 0;m<totalcolumn;m++){
        directions[m] = Math.random()>0.5?'up':'down'
    }
}
const setTime = ()=>{
    for(let m = 0;m<totalcolumn;m++){
        duration[m] = Number((Math.random()*4).toFixed(1))+1+'s'
        console.log(duration);
        
    }
}
onMounted(()=>{
    init()
    setTime()
})
</script>

<template>
    <section class="flow" :style="{'columns':columns}">
        //便利指定次数
        <ul>
            <li  v-for="(num,index) in totalcolumn" :key="num" :style="{height:heightlist[index]+'px','--distance':heightlist[index]+'px','--distance1':-(heightlist[index])+'px','--duration':duration[index]}">
                <div v-for="item in COLUMN[index]" :style="{height:item.height+'px',background:item.background}" class="item" :class='directions[index]'></div>
                <div v-for="item in COLUMN[index]" :style="{height:item.height+'px',background:item.background}" class="item" :class='directions[index]'></div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
.flow{
    width: v-bind('totalwidth');
    height: 2300px;
    ul{
        width: v-bind('totalwidth');
        height: 2300px;
        display: block;
        li{
            margin: 10px;
            vertical-align: top;
            display:inline-block;
            width: v-bind('columns');
            overflow: hidden;
            @keyframes flow {
                from{
                    transform: translateY(var(--distance1));
                }to{
                    transform: translateY(0);
                }
            }
            .up{
                transform: translateY(var(--distance1));
                animation: flow var(--duration) linear infinite ;
            }
            .down{
                transform: translateY(var(--distance));
                animation: flow var(--duration) linear infinite reverse;
            }
        }
    }
}
.item{
    margin: 10px 0;
}
</style>