<template>
    <div>
        <h1>你的选择是：</h1><br>
        <h1>{{ yourChoice }}</h1>
    </div>
</template>

<script>
export default {
    computed:{
        yourChoice() {
                return this.$route.query.item 
            }
        }
    }
</script>

<style>

</style>