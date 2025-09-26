import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:microsoft-onedrive',
      order: 200,
      title: 'Drive',
    },
    name: 'Drive',
    path: '/drive',
    children: [
      {
        name: 'OneDrive',
        path: '/drive/onedrive',
        component: () => import('#/views/drive/onedrive/index.vue'),
        meta: {
          title: 'OneDrive',
        },
      },
    ],
  },
];

export default routes;
