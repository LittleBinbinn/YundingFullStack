<template>
  <router-link to="/Home">Home</router-link>|<router-link to="/about">About</router-link>
  <router-view></router-view>
</template>

<script>
import { mapMutations } from 'vuex';
  export default {
  computed: {
    ...mapMutations([""])
  }
}
</script>

<style scoped>
</style>