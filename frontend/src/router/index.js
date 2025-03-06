import { createRouter, createWebHistory } from 'vue-router';
import PageView from '../pages/PageView.vue';

const routes = [
  {
    path: '/testapp/',
    name: 'home',
    component: PageView,
    props: { pageId: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory('/testapp/'),
  routes,
});

export default router;