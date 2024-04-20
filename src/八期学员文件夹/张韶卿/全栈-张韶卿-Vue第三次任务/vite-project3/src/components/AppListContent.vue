<template>
    <div>
        <div v-for="(item,index) in tracks" :key="index">{{ index + 1 }}+{{ item.name }}</div>

    </div>

</template>




<script>

export default {
    name: 'AppListContent',
    props: {
        list: {
            type: Object,
            required: true
        },
    },
    computed: {
        tracks() {
            return this.list ? this.list.tracks : [];
        }
    },
    data() {
        return {
            
        }
    }
}
</script>



<style scoped></style>