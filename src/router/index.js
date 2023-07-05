import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/index.vue'
import BlogList from '../views/BlogList/index.vue'
import BlogDetails from '../views/BlogDetails/index.vue'
import Create from '../views/Create/index.vue'
import ChangeBlog from '../views/ChangeBlog/index.vue'
import TagSearch from '../views/TagSearch/index.vue'


const routes = [
  { path: '', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    name: 'Home',
    children: [
      { path: '', component: BlogList, name: "BlogList" },
      { path: 'blog/:id', component: BlogDetails, name: 'Blog' },
      { path: 'tags/:tag', component: TagSearch, name: 'TagSearch' },
    ]
  },
  { path: '/create', component: Create },
  { path: '/changeblog/:id', component: ChangeBlog },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 布置路由守卫(路由跳转之际，页面置顶)
router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

export default router