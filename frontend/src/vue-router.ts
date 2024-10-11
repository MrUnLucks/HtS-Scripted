import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/Home.vue'

// TODO: module for routes (accessible also from components to never have a hard coded link)
const routes = [{ path: '/', component: HomePage }]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
