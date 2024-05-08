import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import List from "@/components/List.vue";
import Selected from "@/components/Selected.vue"
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect:"/home"
        },
        {
            path: '/home',
            component: Home, 
            children: [
                {
                    path: 'list',
                    component:List
                },
                {
                    path: 'selected',
                    component:Selected
                }
            ]
        },
        {
            path: '/about',
            component: About
        }
    ]
})
export default router  