import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import News from '@/components/News'
import Discover from '@/components/Discover'
import Detail from '@/components/Detail'
import page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  mode: 'history', //把Router的mode修改为history模式,VueRouter默认的模式为HASH模式
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },

    {path: '*',component: page404},   //当匹配不到合适的路由会跳转到 404 页面

  ]
})
