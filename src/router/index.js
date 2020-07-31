import Vue from 'vue'
import VueRouter from 'vue-router'
import data from '../views/data/data'

const proFile = () => import('../views/proFile/proFile');
const dealMetter = () => import('../views/dealMetter/dealMetter');
const personDetails = () => import('../views/personDetails');
const login = () => import('../views/Login');
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/data'
  },
  {
    path: '/data',
    name: 'data',
    component: data
  },
  {
    path: '/login',
    name: 'login',
    component: login
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
  }
]

const router = new VueRouter({
  routes
})

export default router
