import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home/home.vue'
import login from '../views/login/login.vue'

const routes = [
  { path: '/', component: login },
  { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router