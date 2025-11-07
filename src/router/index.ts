import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PerfilPage from '../views/PerfilPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
