import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: 'challenge' },
  {
    path: '/challenge',
    name: 'challenge',
    component: () => import('@/task/Challenge.vue'),
    children: [
      {
        path: '',
        name: 'challenge-task',
        component: () => import('@/task/pages/Task.vue'),
      },
      {
        path: 'resources',
        name: 'challenge-resources',
        component: () => import('@/task/pages/Resources.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
