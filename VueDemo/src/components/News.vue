<template>
  <div class="news" @click='jumpToPage'>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      msg: "news"
    };
  },
  created(){

  },
  methods: {
    jumpToPage() {
      
    }
  }
};
</script>

<style scoped>
</style>
