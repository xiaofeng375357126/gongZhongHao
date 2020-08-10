import Vue from 'vue'
import VueRouter from 'vue-router'
import data from '../views/data/data'

const proFile = () => import('../views/proFile/proFile');
const dealMetter = () => import('../views/dealMetter/dealMetter');
const personDetails = () => import('../views/personDetails');
const payment = () => import('../views/payment');
const login = () => import('../views/Login');
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/data',
    name: 'data',
    component: data
  },
  {
    path: '/dealMetter',
    name: 'dealMetter',
    component: dealMetter
  },
  {
    path: '/proFile',
    name: 'proFile',
    component: proFile
  },
  {
    path: '/personDetails',
    name: 'personDetails',
    component: personDetails
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment
  }
]

const router = new VueRouter({
  routes
})

export default router
