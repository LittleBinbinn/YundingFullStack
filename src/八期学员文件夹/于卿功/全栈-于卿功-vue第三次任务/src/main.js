import { createApp } from 'vue'
 import song from "./components/song.vue";
import App from './App.vue'

const app = createApp(App);

  app.component('song', song);

app.mount('#app');
