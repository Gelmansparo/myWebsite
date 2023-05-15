import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/details/:id', component: Details, name: 'Details', props: true },
  { path: '/create', component: Create, name: 'Create' },
  { path: '/tag/:tag', component: Tag, name: 'Tag' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router