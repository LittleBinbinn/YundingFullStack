import { createRouter,createWebHistory } from "vue-router";

import Home from '../Views/Home.vue'
import About from '../Views/About.vue';
import { KeepAlive } from "vue";
const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: "/",
            redirect:"/Home"
        },
        {
            path: "/Home",
            component: Home,
            children: [
                {
                    path: "",
                    redirect:"/Home/Home_sonshow"
                },
                {
                    path: "Home_sonshow",
                    component: () => import("../Views/Home_sonshow.vue"),
                    KeepAlive:true
                },
                {
                    path: "Home_sonchoose",
                    component: () => import("../Views/Home_sonchoose.vue"),
                    KeepAlive:true
                }
            ]
        },
        {
            path: "/about",
            component:About
        }
    ]
})

export default router