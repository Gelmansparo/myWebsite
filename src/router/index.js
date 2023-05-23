import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home/index.vue'
import BlogList from '../views/BlogList/index.vue'
import BlogDetails from '../views/BlogDetails/index.vue'


const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    name: 'Home',
    children: [
      { path: '', component: BlogList, name: "BlogList" },
      { path: 'blog/:id', component: BlogDetails, name: 'Blog' },
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router