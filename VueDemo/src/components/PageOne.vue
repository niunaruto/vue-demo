<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:"PageOne",
    data() {
         return {
            loading: false,
            post: null,
            error: null
        }
    },
    created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            let that = this
            that.error = that.post = null
            that.loading = true
            setTimeout(function() {
                
                that.loading = false
                that.post = {'title':'title','body':'body'}
            },1000)
        }
    }  
    
}
</script>

<style scoped>
.backView{
    height: 200px;
    width: 300px;
    border: 2px;
    background-color: yellow;
    border-color: aqua;
}
</style>
