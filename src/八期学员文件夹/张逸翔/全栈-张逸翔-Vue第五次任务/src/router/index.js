import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../component/home.vue')
const About = () => import('../component/about.vue')
const User = () => import('../component/user.vue')
const Module = () => import('../component/module.vue')
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: `user/:name`,
                    component: User,
                    children: [
                        {
                            path: ':module',
                            component: Module
                        }
                    ]
                }
            ]
        },
        // {
        //     path: '/home/user/:name/:module',
        //     component: Module
        // }
        {
            path: '/about',
            component: About
        },


    ]
})
export default router