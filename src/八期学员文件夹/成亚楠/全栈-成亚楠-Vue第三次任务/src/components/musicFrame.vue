<template>
    <div>
        <slot name="top">顶端</slot>
        <hr width="100%" color="black" class="hr-one" />
        <slot name="bottom"></slot>
        <hr width="100%" color="black"  />
    </div>
</template>

<script>

</script>

<style>
.hr-one {
    height: 2px;
    margin-top: -23px;
}

</style>