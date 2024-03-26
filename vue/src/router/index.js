import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/BarChart.vue')
    },
    {
      path: '/pie',
      name: 'PieView',
      component: () => import('../views/PieView.vue')
    },
    {
      path: '/donut',
      name: 'DonutView',
      component: () => import('../views/DonutView.vue')
    },
  ]
})

export default router
