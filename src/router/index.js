import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CoursePlay from '../views/CoursePlay.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: "/CoursePlay",
    name: "CoursePlay",
    component: CoursePlay
  },{
    path: "/CourseWare",
    name: "CourseWare",
    component: () => import('../views/CourseWare.vue')
  }
  // {
  //   path: '/international',
  //   name: 'International',
  //   component: () => import('../views/International.vue')
  // },
  // {
  //   path: '/partners',
  //   name: 'Partners',
  //   component: () => import('../views/Partners.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import('../views/Contact.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router