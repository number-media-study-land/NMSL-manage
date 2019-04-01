<template>
  <div class="searchForm">
    <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
      <el-form-item
        prop="searchType"
        :rules="[
        { required: true, message: '请选择一个搜索类型'}
      ]"
      >
        <el-select class="searchType" v-model="formInline.searchType" placeholder="搜索类型">
          <el-option label="id" value="_id"></el-option>
          <el-option label="姓名" value="name"></el-option>
          <el-option label="邮箱" value="email"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        prop="searchVal"
        :rules="[
        { required: true, message: '搜索值不能为空'}
      ]"
      >
        <el-input class="searchInput" v-model="formInline.searchVal" placeholder="搜索值"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch('formInline')">搜索</el-button>
        <el-button @click="resetForm('formInline')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "searchForm",
  data() {
    return {
      formInline: {
        searchVal: "",
        searchType: ""
      }
    };
  },
  methods: {
    // 搜索用户
    handleSearch(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {

        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
};
</script>

<style lang="less" scoped>
.searchForm {
  .searchType {
    width: 130px;
  }
  .searchInput {
    width: 280px;
  }
}
</style>
