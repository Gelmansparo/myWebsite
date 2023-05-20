import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home/index.vue'
import BlogList from '../views/BlogList/index.vue'
import BlogDetails from '../views/BlogDetails/index.vue'


const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', component: Home, children: [
      { path: '', component: BlogList },
      { path: 'blog/:id', component: BlogDetails },
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router