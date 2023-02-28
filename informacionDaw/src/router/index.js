import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id_dispositivo',
      name: 'home',
      component: home
    },
  ]
})

export default router;
