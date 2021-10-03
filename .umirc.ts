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
        { path: '/test', component: '@/pages/test' },
      ],
    },
  ],
  fastRefresh: {},
});
