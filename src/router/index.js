import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'createaccount',
      component: () => import('../views/CreateAccount.vue')
    },
    {
      path: '/landing',
      name: 'landing',
      component: HomeView
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/accountsetup',
      name: 'accountsetup',
      component: () => import('../views/AccountSetup.vue')
    },
  ]
})

export default router
