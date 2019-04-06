<template>
  <div class="user">
    <h2>用户信息</h2>
    <div class="searchArea">
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
    <div class="tableArea">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="_id" label="id"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column fixed="right" label="已学课程" width="100">
          <template slot-scope="scope">
            <el-button @click="lookStudyList(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="学习目录" :visible.sync="showStudyListDialog" @closed="handleClose">
      <el-table :data="studyList" v-loading="loading">
        <el-table-column property="courseId" label="课程id"></el-table-column>
        <el-table-column property="name" label="课程名"></el-table-column>
        <el-table-column label="当前学习章节">
          <template slot-scope="scope">
            <span>{{scope.row.progress[0]}}-{{scope.row.progress[1]}}.&nbsp;{{scope.row.progressName}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="totalPage"></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { user } from "@/utils/api";

export default {
  name: "user",
  data() {
    return {
      pageInfo: {
        page: 1,
        pageItem: 20
      },
      totalPage: 1,
      tableData: [],
      studyList: [],
      loading: true,
      showStudyListDialog: false,
      formInline: {
        searchVal: "",
        searchType: ""
      }
    };
  },
  methods: {
    // 获取用户列表
    async getUserList(pageInfo) {
      let data = await axios.get(user.getUserList, { params: { ...pageInfo } });
      data = data.data;
      if (data.code === 0) {
        this.totalPage = data.data.totalPage;
        this.tableData = data.data.list;
      }
    },
    // 点击查看按钮
    async lookStudyList(row) {
      this.showStudyListDialog = true;
      let data = await axios.get(user.getUserStudyList, {
        params: { userId: row._id }
      });
      data = data.data;
      if (data.code === 0) {
        this.studyList = data.data;
        this.loading = false;
      }
    },
    // 关闭已学课程目录窗口
    handleClose() {
      this.loading = true;
      this.studyList = [];
    },
    // 搜索用户
    handleSearch(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let data = await axios.get(user.searchUser, {
            params: { ...this.formInline }
          });
          data = data.data.data;

          this.pageInfo = {
            page: data.page,
            pageItem: data.pageItem
          };
          this.totalPage = data.totalPage;

          let result;
          if (
            Object.prototype.toString.call(data.result) === "[object Array]"
          ) {
            result = data.result;
          } else {
            result = data.result ? [data.result] : null;
          }
          this.tableData = result;
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    this.getUserList(this.pageInfo);
  }
};
</script>

<style lang="less" scoped>
.user {
  padding: 5px;
  .searchArea {
    float: right;
    margin: 20px 0;
    .searchType {
      width: 130px;
    }
    .searchInput {
      width: 280px;
    }
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    color: #5d5d5a;
  }

  .tableArea {
    margin-top: 30px;
  }

  .pagination {
    margin-top: 40px;
    text-align: center;
  }
}
</style>
