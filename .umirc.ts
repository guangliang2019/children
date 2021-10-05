import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/test',
          component: '@/pages/test',
        },
        {
          path: '/children/new',
          component: '@/pages/children/new',
        },
        {
          path: '/children/list',
          component: '@/pages/children/list',
        },
        {
          path: '/class/new',
          component: '@/pages/class/new',
        },
        {
          path: '/class/list',
          component: '@/pages/class/list',
        },
        {
          path: '/staff/new',
          component: '@/pages/staff/new',
        },
        {
          path: '/staff/list',
          component: '@/pages/staff/list',
        },
      ],
    },
  ],
  fastRefresh: {},
});
