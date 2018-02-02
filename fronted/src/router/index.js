import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  }
]
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
