<template>
    <div>
        <div v-for="(item,index) in tracks" :key="index">{{ index + 1 }}+{{ item.name }}</div>

    </div>

</template>

<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
    list: {
        type: Object,
        required: true
    }
});
const tracks = computed(() => props.list ? props.list.tracks : []); 


</script>



<style scoped></style>