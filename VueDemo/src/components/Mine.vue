<template>
  <div class="hello" @click='jumpToPage'>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      msg: "Mine"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
