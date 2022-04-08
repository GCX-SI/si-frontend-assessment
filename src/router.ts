import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import ChallengeRoutes from '@/task/Challenge.routes';
import HubRoutes from '@/iothub/Hub.routes';

const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: 'challenge' },
  ...ChallengeRoutes,
  ...HubRoutes
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
