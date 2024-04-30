import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import List from '../components/list.vue'
import Choice from '../components/Choice.vue'

const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/List',
                name: 'List',
                component: List,
            },
            {
                path: '/Choice/:textshow',
                name: 'Choice',
                component: Choice,
            }
        ]
    },
    {
        path: '/About',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router