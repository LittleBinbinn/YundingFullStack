import home from '../components/home.vue';
import about from '../components/about.vue';
import list from '../components/list.vue';
import option from '../components/option.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home/list/1'},
        {
            path: '/home',
            name: 'Home',
           component: home,
            children: [
                {
                    path: 'list/:id',
                    component: list
                },
                {

                    path: 'option/:id',  
                    component: option
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: about
        }
    ]
});

export default router;
