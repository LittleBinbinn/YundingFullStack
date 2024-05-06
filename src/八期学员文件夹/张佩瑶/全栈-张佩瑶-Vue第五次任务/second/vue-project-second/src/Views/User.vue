<script setup>

</script>

<template>
    <div class="user">
        <div class="user-body">
            <br>
            <hr>
            <button>我是User {{ $route.params.id }}</button>
            <h2>User</h2>
            <router-link :to="{name: 'userModule1'}">userMoudle1</router-link>
            <router-link :to="{name: 'userModule2'}">userMoudle2</router-link>
            <hr>     
            <router-view></router-view>
            <br>
        </div>
    </div>
</template>

<style scoped>
.user {
    background-color: purple;
}
.user-body {
    margin: 20px 20px; 
}
button {
    width: 200px;
    height: 50px;
    background-color: greenyellow;
    border-radius: 20px;
}
a {
    color: ivory;
    padding-right: 10px;
}
</style>