<template>
    <div class="singer-list">
        <slot></slot>
    </div>
</template>

<script>

export default {
    props:{artists:{type: Array, required: true}}
}
</script>

<style scoped>
    .singer-list{
        display: flex;
        align-items: center;
        width: 100%;
        height: 200px;
        justify-content: space-between;
        padding: 10px;
    }
    
</style>