import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/scatter',
      name: 'scatter',
      component: () => import('../views/ScatterView.vue')
    },
    {
      path: '/bar',
      name: 'bar',

      component: () => import('../views/BarView.vue')
    }
  ]
})

export default router
