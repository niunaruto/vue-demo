<template>
  <div class="hello" @click='jumpToPage'>
    <p>{{msg}}</p>
    <p>detail</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      msg: "Detail"
    };
  },
  created(){
    debugger
    this.msg = this.$route.params.userName
  },
  beforeDestroy(){
debugger
  },
  methods: {
    jumpToPage() {
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
