<script setup>

</script>

<template>
    <div>
        <div class="click">
            <router-link to="/List" class="a">List</router-link>
            &nbsp;
            <span class="a">|</span>
            &nbsp;
            <router-link to="/Choice/:textshow" class="a">Choice</router-link>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0 auto;
    padding: 0;
}

.click {
    width: 150px;
}

.a {
    color: blue;
}
</style>