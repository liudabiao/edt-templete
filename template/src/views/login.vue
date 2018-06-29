<template>
  <div class="login">
    <el-button type="primary" @click="signin">登陆</el-button>
  </div>
</template>

<script>
  export default {
    name: "login",
    methods: {
      signin() {
        this.$router.push('/main/temp');
        // 这是一个post请求的例子
        // this.$http.post(`${this.$baseUrl}/menu/listAll`).then((res) => {
        //   console.log(res.data);
        // });
      }
    }
  }
</script>

<style scoped>

</style>
