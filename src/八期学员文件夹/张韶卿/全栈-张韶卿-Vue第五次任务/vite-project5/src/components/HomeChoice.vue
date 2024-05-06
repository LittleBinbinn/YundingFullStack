<template>
    <div>
        <h2>你选择了: {{ selectedItem }}</h2> 
    </div>
</template>

<script>
export default {
    name: 'HomeChoice',
    computed: {  
        selectedItem() {  
            return this.$route.params.selectedItem || '无'; // 如果没有传递参数，则显示 '无'  
        }  
    },
};
</script>

<style scoped></style>
