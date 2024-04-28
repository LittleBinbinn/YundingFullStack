<template>
  <div id="app">
    <MusicComponent />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import MusicComponent from './components/MusicComponent.vue';

defineComponent({
  name: 'App',
  components: {
    MusicComponent
  }
});  
</script>

