<template>
    <div :class="bangClass">{{ list.name }}</div>
    <img :src="list.coverImgUrl" :class="picClass" />
    <div :class="jieClass">{{ list.description }}</div>

</template>




<script>
export default {
    name: 'AppListHeader',
    props: {
        list: {
            type: Object,
            required: true
        },
        
    },
    
    data() {
        return {
            picClass: 'pic',
            bangClass: 'bang',
            jieClass:'jie'
        }
    }
    }
</script>



<style scoped>
.pic{
    position: relative;
    left: 170px;
    top: -10px;
    width: 100px;
    height: auto;
}
.bang{
    position: relative;
    top: 48px;
    left: 39px;
    font-weight: bold;
    font-size: large
    /* background-color: #c43535; */
}
.jie{
    width: 500px;
}

</style>