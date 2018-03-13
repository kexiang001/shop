import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProjectList from '@/page/ProjectList'
import Cart from '@/page/Cart'
import Register from '@/page/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
