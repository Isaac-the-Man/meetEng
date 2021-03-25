import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormSenior from '@/views/FormUpper';
import FormFreshmen from '@/views/FormFreshmen';
import AdminLogin from '@/views/AdminLogin';
import AdminPanel from "@/views/AdminPanel";
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
    path: '/form/signup',
    name: 'FormFreshmen',
    component: FormFreshmen
  },
  {
    path: '/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanel
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
