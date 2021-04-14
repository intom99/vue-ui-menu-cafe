import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import Drinks from '../views/Drinks.vue'
import drinkDetail from '../views/drinkDetail.vue'
import Cart from '../views/Cart.vue'
import orderSuccess from '../views/orderSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: Drinks
  },
  {
    path: '/drinks/:id',
    name: 'drinkDetail',
    component: drinkDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order-success',
    name: 'orderSuccess',
    component: orderSuccess
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
