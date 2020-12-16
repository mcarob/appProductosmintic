import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import programa from '../views/program.vue';

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
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router