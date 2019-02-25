<template>
  <div @click="gotoPageOne" class="superView">{{msg}}</div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '点击去pageone'
    }
  },
  methods:{
    gotoPageOne(){
      // 	    		this.$router.push({ name: 'Paramdetails', params: { id: this.UserInput }})

        this.$router.push({name: 'PageOne',params:{ id:'1'}});
    }
  },
}
</script>


<style scoped>
.superView{
  width: 200px;
  height: 200px;
  background-color: yellow;
  text-align: center;
}
</style>
