<template>
    <div>
        选择：{{ clickchoice }}
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
let clickchoice=ref('')
onMounted(() => {
    clickchoice.value=route.query.info
})
</script>
<style scoped>
</style>