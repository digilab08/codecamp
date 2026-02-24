import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('../views/ImpressumView.vue'),
    },
    {
      path: '/datenschutzerklaerung',
      name: 'Datenschutzerklärung',
      component: () => import('../views/DatenschutzerklaerungView.vue'),
    },
    {
      path: '/lection/:catchAll(.*)*',
      name: 'Lection',
      component: () => import('../views/LectionView.vue'),
    },
    {
      path: '/js-basics',
      component: () => import('../views/JsBasicsView.vue'),
      children: [
        {
          path: '',
          name: 'JSBasicsOverview',
          component: () => import('../views/JsBasicsOverviewView.vue'),
        },
        {
          path: 'variablen',
          name: 'JSBasicsVariablen',
          component: () => import('../views/JsBasicsVariablesView.vue'),
        },
      ],
    },
  ],
})

export default router
