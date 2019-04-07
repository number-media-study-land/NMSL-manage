<template>
  <div class="layout">
    <el-menu>
      <el-menu-item index="1" @click="routerChange('user')">
        <i class="el-icon-tickets"></i>
        <span slot="title">用户信息</span>
      </el-menu-item>
      <el-menu-item index="2" @click="routerChange('courses')">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">课程信息</span>
      </el-menu-item>
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
