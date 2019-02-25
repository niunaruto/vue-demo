<template>
  <div @click="gotoPageOne" class="superView">{{msg}}
    <br/>
    <router-link :to="{ path: '/PageOne', query: { plan: 'private' }}" tag="div" class="divTag" >foo
    
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '点击去pageone'
    }
  },
  methods:{
    gotoPageOne(){
        // this.$router.push({name: 'PageOne',query:{ name:'Naruto'}});
    }
  },
   beforeRouteUpdate (to, from, next) {
     
    // react to route changes...
    // don't forget to call next()
  }
//   watch:{
//  '$route' (to, from) {
//    debugger
//       // 对路由变化作出响应...
//     }
//   },
}
</script>



<style scoped>
.superView{
  width: 200px;
  height: 200px;
  background-color: yellow;
  /* text-align: center; */
}
.divTag{
  background-color: rebeccapurple;
  width: 200px;
  height: 100px;
}
</style>
