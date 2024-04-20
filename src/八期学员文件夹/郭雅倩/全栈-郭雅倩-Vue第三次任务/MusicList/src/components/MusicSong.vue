<template>
    <div class='description'>
        <div class="bjgdiv">
        <div class="listname">
            <slot name="ListName"></slot>
        </div>
        <div class="Listintroduction">
            <slot name="Listintroduction"></slot>
        </div>
        <div class="desPic">
            <slot name="desPic"></slot>
        </div>
    </div>
        <div class="song">
            <slot name="song"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.description{
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom:  4px solid black;
}
.listname{
    margin-top: 6px;
    font-weight: bolder;
    font-size: 18px;
    
    
}
.Listintroduction{
    
    font-size: 14px;
    margin-right: 150px;
    margin-top: 10px;
}
.desPic{
    position: absolute;
    right: 50px;
    top:20px;
}
.bjgdiv{
    border-bottom:  4px solid black;
    margin-right: 8px;
}
.song{
    font-size: 18px;
    border-bottom:  4px solid rgb(120, 116, 116);
    margin-right: 8px;
}


</style>