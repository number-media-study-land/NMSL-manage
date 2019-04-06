<template>
  <div class="searchForm">
    <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
      <el-form-item label="id" prop="id">
        <el-input v-model="formInline.id"></el-input>
      </el-form-item>
      <el-form-item label="课程名" prop="name">
        <el-input v-model="formInline.name"></el-input>
      </el-form-item>
      <el-form-item label="课程类型" prop="type">
        <el-select class="searchSelect" v-model="formInline.type">
          <el-option label="图像处理" value="图像处理"></el-option>
          <el-option label="音频处理" value="音频处理"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="课程难度" prop="level">
        <el-select class="searchSelect" v-model="formInline.level">
          <el-option label="入门" value="入门"></el-option>
          <el-option label="初级" value="初级"></el-option>
          <el-option label="中级" value="中级"></el-option>
          <el-option label="高级" value="高级"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否添加课程视频" prop="videos">
        <el-select class="searchSelect" v-model="formInline.videos">
          <el-option label="是" :value="true"></el-option>
          <el-option label="否" :value="false"></el-option>
        </el-select>
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
        id: "",
        name: "",
        type: "",
        level: "",
        videos: null
      }
    };
  },
  methods: {
    // 转化搜索参数
    switchSearchParams() {
      let params = {};
      for (let key in this.formInline) {
        if (this.formInline[key] !== "" && this.formInline[key] !== null) {
          params[key] = this.formInline[key];
        }
      }
      return params;
    },
    // 搜索用户
    handleSearch(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let params = this.switchSearchParams();
          this.$emit("beforeSearch", params);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.searchForm {
  text-align: right;

  .searchSelect {
    width: 130px;
  }
}
</style>
