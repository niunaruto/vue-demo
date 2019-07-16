<template>
  <div id="app">
    <div class="navBar" v-if="showNav">
      <p class="title">{{showTitle}}</p>
    </div>
    <div class="footerView" v-if="showTabbar">
        <div class="tab-bar" v-for="item in barItems" @click="tabBarClick(item)">
            <div class="bar">{{item.title}}</div>
        </div>
    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
</transition>
  </div>
</template>

<script>
import Vue from "vue";


export default {
  name: "App",
  data() {
    return {
      showTabbar:true,
      showNav:true,
      showTitle:'首页',
      barItems:[
        {
          'title':'首页',
          'linkTo':'Home',
        },
        {
          'title':'新闻',
          'linkTo':'News',
        },
        {
          'title':'发现',
          'linkTo':'Discover',
        },
        {
          'title':'我的',
          'linkTo':'Mine',
        },
      ],
    };
  },
  mounted() {},
  created() {
   
  },
     watch: {
          '$route' (to, from) {
                let showTabbar = false
                let showNav = false
                this.barItems.forEach(element => {
                  if(element.linkTo == to.name){
                    showTabbar = true
                    showNav = true
                    this.showTitle = element.title
                  }
                });
                this.showNav = showNav;
                this.showTabbar = showTabbar;
          }
      },
  methods: {
    tabBarClick(model) {
    this.$router.push({
        name: model.linkTo, 
        params: {
           userName: model 
        }
      });
    }
  }
};
</script>

<style>
#app .navBar{
  display: flex;
    z-index: 999;
    position: fixed;
    top: 0%;
    width: 100%;
    height: 64px;
    background-color: white;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #efefef
}
#app .title{
  font-weight: 600;
  color: #000;
  font-size: 22px;
}

#app .footerView{
    display: flex;
    z-index: 999;
    position: fixed;
    bottom: 0%;
    width: 100%;
    height: 66px;
    background-color: yellowgreen;
}
#app .tab-bar{
  flex: 1;
  border: 1px solid #efefef;
  display: flex;
}
.tab-bar .bar{
  text-align: center;
  width: 100%;
  line-height: 66px;
}


*{margin:0;padding:0}em,i{font-style:normal}li{list-style:none}img{border:0;vertical-align:middle}button{cursor:pointer}a{color:#666;text-decoration:none}a:hover{color:#e33333}button,input{font-family:Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,\\5B8B\4F53,sans-serif}body{-webkit-font-smoothing:antialiased;background-color:#fff;font:12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,\\5B8B\4F53,sans-serif;color:#666}.hide,.none{display:none}.clearfix:after{visibility:hidden;clear:both;display:block;content:".";height:0}.clearfix{*zoom:1}
</style>
