<template>
  <h1>home.vue</h1>
  <input type="text" v-model="localInput" @keyup.enter="add(localInput)" placeholder="请输入羊村成员" />
  <RouterLink v-for="name in store.state.data" :to="{ path: '/home/user/' + name, query: { name: name } }">{{ name }}
  </RouterLink>
  <RouterView></RouterView>
</template>
<script setup>
import { useStore } from 'vuex'
import { ref, watch, onMounted } from 'vue'

const localInput = ref('');

watch(localInput, (newValue) => {
  store.commit('setInputValue', newValue);
});

onMounted(() => {
  localInput.value = store.state.inputValue;
});

const store = useStore()
function add(user) {
  store.commit('addUserToStore', user)
  localInput.value = ''
}
</script>

<style scoped></style>
