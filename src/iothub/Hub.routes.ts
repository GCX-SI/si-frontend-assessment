export default [
  {
    path: '/iothub',
    name: 'iothub',
    component: () => import('@/iothub/Hub.vue'),
    children: [
      {
        path: 'devices',
        name: 'device-overview',
        alias: [''],
        component: () => import('@/iothub/pages/Devices.vue'),
      },
      {
        path: 'devices/:id',
        name: 'device-details',
        component: () => import('@/iothub/pages/Device.vue'),
      },
    ],
  },
]
