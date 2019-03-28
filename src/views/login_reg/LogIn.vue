<template>
  <div class="login">
    <div class="loginWrapper">
      <h1>登录管理系统</h1>
      <div class="formBox">
        <el-input v-model="user" placeholder="用户名" class="inputBox"></el-input>
        <el-input type="password" v-model="password" placeholder="密码"></el-input>
        <el-button type="primary" class="loginBtn" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { login } from "@/utils/api";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    async login() {
      let params = {};
      params.user = this.user;
      params.password = this.password;
      let data = await axios.post(login.url, params);
      data = data.data;
      if (data.code === 0) {
        this.$router.push({ path: '/manage' })
      } else {
        this.$message.error(`错误：${data.msg}`);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

  .loginWrapper {
    margin-bottom: 30px;

    h1 {
      margin-bottom: 15px;
      color: #666;
      font-size: 24px;
      font-weight: 300;
      text-align: center;
    }

    .formBox {
      width: 432px;
      max-width: 100%;
      border: 1px solid #e3e7f1;
      padding: 30px 40px;
      background-color: #fff;
      border-radius: 2px;
      box-sizing: border-box;

      .inputBox {
        margin-bottom: 20px;
      }
      .loginBtn {
        margin-top: 20px;
        width: 100%;
        font-size: 20px;
      }
    }
  }
}
</style>
