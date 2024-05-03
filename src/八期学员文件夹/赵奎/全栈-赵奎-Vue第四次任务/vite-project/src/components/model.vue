<template>
    <h2>{{title}}</h2>
    <div>
        <slot> </slot>
    </div>
</template>

<script setup>
// export default {
//     props:["title"],
// }
const props = defineProps("title")
</script>