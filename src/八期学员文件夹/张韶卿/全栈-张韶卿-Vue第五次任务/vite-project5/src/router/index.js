
import Home from '../components/Home.vue';  
import About from '../components/About.vue';  
import HomeChoice from '../components/HomeChoice.vue'; 
import HomeShow from '../components/HomeShow.vue'; 
import { createRouter, createWebHistory } from 'vue-router' 

  
const routes = [  
  {  
    path: '/',  
    name: 'Home',  
    component: Home,  
    children: [  
      {  
        path: '',
        name: 'home-show1', 
        component: HomeShow,  
      },  
      {  
        path: 'child1',
        name: 'home-show', 
        component: HomeShow,  
      },  
      {  
        path: 'child2/:selectedItem?', 
        name: 'home-choice',
        component: HomeChoice,  
      },  
        
    ],  
  },  
  {  
    path: '/about',  
    name: 'About',  
    component: About,  
  },  
  // 其他路由...  
];  
  
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
  
export default router;
