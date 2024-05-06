import { createApp } from 'vue'
import router from '../src/router/index.js'
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');




