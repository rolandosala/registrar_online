import { createRouter, createWebHashHistory } from 'vue-router'
import { auth } from '@/firebase/init'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('../views/HomePage.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/accountsetup', 
      name: 'accountsetup',
      component: () => import('../views/AccountSetup.vue')
    },
    {
      path: '/readmorefaq',
      name: 'readmorefaq',
      component: () => import('../views/ReadMoreFAQ.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      auth.onAuthStateChanged((user) => {
          if (user) {
              if(auth.currentUser.displayName === null){
                  next({ path: '/' });
              }
              
              next();
          } else {
              next({ path: '/' });
          }
      })
      
  } else {
      next();
  }
})

export default router
