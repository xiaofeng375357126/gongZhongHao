import Vue from 'vue'
import VueRouter from 'vue-router'
import data from '../views/data/data'

const proFile = () => import('../views/proFile/proFile');
const dealMetter = () => import('../views/dealMetter/dealMetter');
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
    path: '/dealMetter',
    name: 'dealMetter',
    component: dealMetter
  },
  {
    path: '/proFile',
    name: 'proFile',
    component: proFile
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
