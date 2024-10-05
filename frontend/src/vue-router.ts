import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/Home.vue';
import TestPage from './pages/Test.vue';
import LobbyPage from './pages/Lobby.vue';

// TODO: module for routes (accessible also from components to never have a hard coded link)
const routes = [
  { path: '/', component: HomePage },
  { path: '/lobby', component: LobbyPage },
  { path: '/test', component: TestPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
