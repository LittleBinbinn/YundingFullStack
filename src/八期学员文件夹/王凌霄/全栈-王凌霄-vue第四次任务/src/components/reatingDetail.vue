<script setup lang="ts">
import{defineProps,PropType} from 'vue'
interface Item{
    name:string;
    coverImgUrl:string;
    description:string;
    tracks:song[]
}
type song = {
    name:string;
    picUrl:string
}
defineProps({
    item:Object as PropType<Item>
})
</script>

<template>
    <div>
        <h3>{{ item?.name }}</h3>
        <section class="introduce">
            <span>{{ item?.description }}</span>
            <img :src="item?.coverImgUrl" alt="">
        </section>
        <section class="list">
            <ul v-for="lists in item?.tracks" :key="lists.picUrl">
                <li>{{ lists.name }}</li>
            </ul>
        </section>
    </div>
</template>

<style scoped lang="scss">
    div{
        height: 760px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h3{
            text-align: left;
            color: #000;
            margin: 0;
        }
        .introduce{
            width: 380px;
            border-top: 1px black solid;
            border-bottom: 1px black solid;
            height: 130px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            span{
                display: inline-block;
                width: 200px;
                height: 100px;
                color: black;
                background-color: blanchedalmond;
            }
            img{
                width: 100px;
                height: 100px;

            }
        }
        .list{
            
            text-align: left;
            width: 380px;
            border-top: 1px black solid;
            border-bottom: 1px black solid;
            display: flex;
            flex-direction: column;
            li{
                list-style: none;
                width: 360px;
                color: black;
            }
        }
    }
</style>