import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WHATTHIS',
      component: () => import('../components/WHATTHIS.vue')
    },
    {
      path: '/bar',
      name: 'BarView',
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
    {
      path: '/line',
      name: 'LineView',
      component: () => import('../views/LineView.vue')
    },
    {
      path: '/scatter',
      name: 'ScaterView',
      component: () => import('../components/ScatterChart.vue')
    }
  ]
})

export default router
