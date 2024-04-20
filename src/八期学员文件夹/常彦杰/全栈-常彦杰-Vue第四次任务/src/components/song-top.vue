<template>
    <div id="songtop">
        <div id="title">
        <span class="left">
        <slot name="title">

        </slot>
        <slot name="description">

        </slot>
        </span>
        <span class="img">
        <slot name="img">

        </slot>
        </span>
        </div>
        <hr>
        <div id="data">
            <slot name="data">

            </slot>
        </div>
    </div>    
</template>

<script setup>

</script>

<style scoped>
span{
    display: inline-block;
}
.left {
    width: 200px;
}
#data {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>