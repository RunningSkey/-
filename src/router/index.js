import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import(/* webpackChunkName: "classify" */ '../views/Classify.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import(/* webpackChunkName: "find" */ '../views/Find.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "my" */ '../views/My.vue')
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  mode:'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
