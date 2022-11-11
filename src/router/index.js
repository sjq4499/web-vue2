import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/love',
    name: 'love',
    component: () => import('@/views/love/index.vue'),
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import('@/views/progress/index.vue'),
  },
  {
    path: '/3dlove',
    name: '3dlove',
    component: () => import('@/views/love/3dlove.vue'),
  },
  {
    path: '/photo1',
    name: 'photo1',
    component: () => import('@/views/photo/index1.vue'),
  },
  {
    path: '/photo2',
    name: 'photo2',
    component: () => import('@/views/photo/index2.vue'),
  },
  {
    path: '/photo3',
    name: 'photo3',
    component: () => import('@/views/photo/index3.vue'),
  },

  // {
  //   path: '/loveTree',
  //   name: 'loveTree',
  //   component: () => import('@/views/love/tree.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
