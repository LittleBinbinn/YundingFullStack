<template>
    <div class="about-container">
        <h1>我是about组件</h1>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            option: ''
        };
    },

};  
</script>

<style scoped>
.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
</style>