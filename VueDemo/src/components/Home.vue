<template>
  <div class="hello">
    
    <div class="listCell" v-for="img in imgList" @click='jumpToPage(img)'>
      <img :src="img"/>
    </div>

  
  </div>
</template>

<script>
import { getImages } from "../http/interface";
import Vue from 'vue'
import VueProgressiveImage from 'vue-progressive-image'
Vue.use(VueProgressiveImage)

export default {
  name: "Home",
  data() {
    return {
      msg: "",
      listModel:[],
      imgList:[''],
    };
  },
  created(){
    
     getImages().then(res => {
      this.imgList = res
      this.msg  =res[0] 
      });
  },
  methods: {
    jumpToPage(model) {
      // 不会暴露在url里，
      this.$router.push({
        name: 'Detail', 
        params: {
           userName: model 
        }
      });

      // 在url里会暴露参数
      // this.$router.push({
      //   path:'/Mine',
      //   query:{userName:model}
      // });

    }
  }
};
</script>

<style scoped>
.hello{
  display: flex;
  flex-direction: column;
  padding-bottom: 88px;
  padding-top: 64px;
}

.listCell{
  border: 1px solid yellowgreen;
}
.listCell img{
  width: 100%;
}

</style>
