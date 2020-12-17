import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import programa from '../views/program.vue';
import agregarCategoria from '../views/agregarCategoria.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/program',
        name: 'program',
        component: programa
    },
    {
        path: '/agregarCategoria',
        name: 'agregarCategoria',
        component: agregarCategoria
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router