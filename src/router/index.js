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
];

const router = new VueRouter({
  routes,
});

export default router;
