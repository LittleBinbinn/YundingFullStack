import { createRouter,createWebHashHistory } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Lists from "../pages/Lists.vue";
import Choice from "../pages/Choice.vue";
import { KeepAlive } from "vue";
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            name:'Home',
            path:'/home',
            component: Home,
            children:[
               {
                name:'list',
                path:'list',
                component:Lists,
                meta:{KeepAlive:true}
               },
               {
                name:'choice',
                path:'choice',
                component:Choice,
               }
            ]
        },
        {
            name:'About',
            path:'/about',
            component: About,
        },
        {
            path:'/',
            redirect:'/home',
        }
    ]
})
export default router