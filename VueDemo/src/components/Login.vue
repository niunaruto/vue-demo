<template>
    <div class="loginView" @click="loginSuccess">
        

    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{

        }
    },
    methods:{
        loginSuccess(){
            sessionStorage.setItem('needLogin','dad')
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.loginView{
    background-color: darkblue;
    width: 100px;
    height: 300px;
}

</style>
