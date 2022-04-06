import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import IothubRoutes from '@/iothub/Hub.routes'
import ChallengeRoutes from '@/task/Challenge.routes'

const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: 'challenge' },
  ...ChallengeRoutes,
  ...IothubRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
})

export default router
