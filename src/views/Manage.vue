<template>
  <div class="manage">
    <el-container>
      <el-header>
        <router-link :to="{ path: '/manage' }">
          <img class="logo" src="@/assets/logo.svg" alt>
          <h3>数字媒体在线学习平台-后台管理系统</h3>
        </router-link>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Layout/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Layout from "../components/Layout";

export default {
  name: "manage",
  components: {
    Layout
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.manage {
  .el-header {
    position: relative;
    border-bottom: 1px solid #e6e6e6;
    .logo {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      margin-left: 10px;
      height: 40px;
    }
    h3 {
      margin-left: 70px;
      line-height: 60px;
      color: #5d5d5a;
      font-weight: 400;
    }
  }
  .el-aside {
    height: calc(100vh - 60px);
    border-right: 1px solid #e6e6e6;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .el-main {
    position: relative;
    height: calc(100vh - 60px);
    background: #f2f2f2;
  }
}
</style>
