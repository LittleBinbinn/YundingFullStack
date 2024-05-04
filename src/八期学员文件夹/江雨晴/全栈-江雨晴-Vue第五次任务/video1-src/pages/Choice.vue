<template>
    <h4>你的选择是：</h4>
    <div>{{route.query.target}}</div>
</template>
<script setup name="Choice" lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
</script>