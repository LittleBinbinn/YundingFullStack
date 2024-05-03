import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue'; 
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about', 
        name: 'AboutPage',
        component: About,
        meta: {
            keepAlive: true 
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;