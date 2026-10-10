import FlatView from '@/views/FlatView.vue';
import GlobalView from '@/views/GlobalView.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: HomeView,
    },
    {
      path: '/flatmap',
      component: FlatView,
    },
    {
      path: '/3dmap',
      component: GlobalView,
    },
  ],
});

export default router;
