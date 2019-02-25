import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/components/PageOne'

Vue.use(Router)

export default new Router({
  mode: 'history',  //把Router的mode修改为history模式,VueRouter默认的模式为HASH模式
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {//路由的懒加载
      path: '/PageOne',
      name: 'PageOne',
      component: resolve => require(['@/components/PageOne.vue'], resolve)
    }
  ]
})
