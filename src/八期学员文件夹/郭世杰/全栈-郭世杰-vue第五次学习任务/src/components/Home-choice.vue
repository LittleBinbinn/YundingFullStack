<template>
    <div>
        选择:{{ choice }}
    </div>
</template>

<script setup>
    import {
        ref,onMounted
    } from 'vue'
    import { useRoute } from 'vue-router'
    const content = useRoute()
    let choice=ref('')
    onMounted(() => {
        choice.value = content.query.infor
    })
    </script>

<style>

</style>