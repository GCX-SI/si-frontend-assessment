export default [
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
