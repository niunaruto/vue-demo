<template>
  <div class="hello" @click='jumpToPage'>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "Discover",
  data() {
    return {
      msg: "Discover"
    };
  },
  created(){
    this.msg = this.$route.params.userName
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
