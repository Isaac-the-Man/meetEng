import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormSenior from '@/views/FormSenior';
import PageNotFound from '@/views/PageNotFound';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form/upperclassmen',
    name: 'FormSenior',
    component: FormSenior
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
