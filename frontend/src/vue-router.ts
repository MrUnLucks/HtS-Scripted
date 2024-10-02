import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/Home.vue';
import TestPage from './pages/Test.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/test', component: TestPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
