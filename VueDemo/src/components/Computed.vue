<template>
    <div class="app">
        <span>这个vue的作用是说明 -- 计算属性的使用-- </span>
        <p>{{userName}}</p>
        <a href="/Base">{{getUserName()}}</a>
        
        <div @click="changeBox">点击改变box值</div>
    </div>
</template>

<script>
export default {
    name:'computed',
     data(){
        return{
            box:'name'
        }
    },
    methods:{
        getUserName(){
            return 'bilibili'
        },
        changeBox(){
            this.box = 'changeBox'
        },
    },
    watch:{
         box: function (newBox, oldBox) {
            this.answer = 'Waiting for you to stop typing...'
        }
    },
    computed:{
        userName(){
            // 不同的是计算属性是基于它们的依赖进行缓存的 
            // 只在相关依赖发生改变时它们才会重新求值。这就意味着只要 box 还没有发生改变，
            // 多次访问 userName 计算属性会立即返回之前的计算结果，而不必再次执行函数。 
            return 'na' + this.box
        }
    }
}
</script>
