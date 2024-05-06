import { createRouter,createWebHashHistory } from "vue-router";
import home from "../pages/home.vue";
import myAbout from "../pages/myAbout.vue";
import user from "../pages/user.vue"
import module1 from "../pages/moudule1.vue"
import module2 from "../pages/moudule2.vue"
import { KeepAlive } from "vue";
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            name:'home',
            path:'/home',
            component:home,
            meta:{KeepAlive:true},
            children:[
                {
                    name:'user',
                    path:'user',
                    component:user,
                    meta:{KeepAlive:true},
                    children:[
                        {
                            name:'moudule1',
                            path:'moudule1',
                            component:module1,
                            meta:{KeepAlive:true},
                        },
                        {
                            name:'moudule2',
                            path:'moudule2',
                            component:module2,
                            meta:{KeepAlive:true},
                        }
                    ]
                }
            ]
        },
        {
            name:'about',
            path:'/about',
            component:myAbout,
            meta:{KeepAlive:true},
        }
    ]
})
export default router