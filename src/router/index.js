import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/bio/Index.vue'
import Createbios from '../views/bio/Createbios.vue'
import Detailbios from '../views/bio/Detailbios.vue'

const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/index',
name: 'Index',
component: Index
},
{
path: '/createbios',
name: 'Createbios',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Createbios
},
{
path: '/detailbios/:id',
name: 'Detailbios',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Detailbios
}
]

const router = createRouter({
history: createWebHashHistory(),
routes
})

export default router

