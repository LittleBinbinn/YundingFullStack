<template>
    <div class="showmessage">
        <template v-for="(item,index) in art">
            <slot :item="item" :index="index" name="top" >

            </slot>
        </template>
        <template v-if="true">
            <slot name="mid">

            </slot>
        </template>
    </div>
</template>

<script>
    export default {
    props:['art']
    }
</script>

<style  scoped>
*{
    padding: 0;
}
.showmessage{
    display: flex ;
    justify-content: space-between;
    margin-top: 5px;
    border-bottom: 2px solid black;
    padding-bottom: 2px;
}
</style>