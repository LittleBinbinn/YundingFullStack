<template>
<slot name="head">none</slot>
<hr class="one">
<slot name="cnt">none</slot>
<hr>
</template>

<script>
    export default {

}
</script>

<style scoped>
.one{
    height: 2px;
    background-color: black;
}
</style>