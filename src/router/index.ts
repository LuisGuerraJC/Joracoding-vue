import Home from '@/views/Home.vue'
// import Login from '@/views/Login.vue'
// import Board from '@/views/Board.vue'
import { InicioVue, ServiciosVue, NosotrosVue, PortafolioVue, ContactoVue } from '@/components/sections';
import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory( import.meta.env.BASE_URL),
    routes: [

        { path:"/", name:"Home",component: Home},
    
        { path:"/Login", name:"Login",component: ()=> import('../views/Login.vue')},
        { path:"/Board", name:"Board",component: ()=> import('../views/Board.vue')},


    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth'
          }
        }
      },
});

export default router