// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
router.beforeEach(function (to,from,next) {
  //console.log(to,from,next)
  //需求登录判断
  if(to.meta.needLogin){
      /*不为空*/
      if(sessionStorage.getItem('needLogin')){
          next();
      }else{
          next('/Login?redirect=22')
      }
  }
  else{
      next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
