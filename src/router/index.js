import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import programa from '../views/program.vue';
import agregarCategoria from '../views/agregarCategoria.vue';
import agregarProducto from '../views/agregarProducto.vue';
import listarProductos from '../views/listarProductos.vue';

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
    },
    {
        path: '/agregarProducto',
        name: 'agregarProducto',
        component: agregarProducto
    },
    {
        path: '/listarProductos',
        name: 'listarProductos',
        component: listarProductos
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router