<template>
  <div class="layout">
    <el-menu>
      <el-menu-item index="1" @click="routerChange('user')">
        <i class="el-icon-menu"></i>
        <span slot="title">用户信息</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>课程资源</span>
        </template>
        <el-menu-item index="2-1" @click="routerChange('courses')">课程信息</el-menu-item>
        <el-menu-item index="2-2" @click="routerChange('courseVideos')">课程视频</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "layout",
  methods: {
    routerChange(url) {
      this.$router.push({ path: `/manage/${url}` });
    }
  }
};
</script>

<style lang="less" scoped>
.layout {
  .el-menu {
    border: 0;
  }
}
</style>
