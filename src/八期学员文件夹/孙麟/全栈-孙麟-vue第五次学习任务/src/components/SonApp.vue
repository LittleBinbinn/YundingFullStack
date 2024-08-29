<script setup>

</script>

<template>
    <div>
        <div class="click">
            <router-link to="/Home">Home</router-link>
            &nbsp;
            <span>|</span>
            &nbsp;
            <router-link to="/About">About</router-link>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0 auto;
    padding: 50px 0px 0px 0px;
}

.click {
    width: 150px;
}
</style>