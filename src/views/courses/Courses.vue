<template>
  <div class="user">
    <h2>课程信息</h2>
    <div class="searchArea">
      <search-form />
    </div>
    <div class="tableArea">
      <el-table v-loading="loading" :data="tableData" border style="width: 100%">
        <el-table-column prop="_id" label="id"></el-table-column>
        <el-table-column prop="name" label="课程名"></el-table-column>
        <el-table-column prop="type" label="课程类型"></el-table-column>
        <el-table-column prop="level" label="课程难度"></el-table-column>
        <el-table-column prop="time" label="学习时间 /小时"></el-table-column>
        <el-table-column fixed="right" label="是否添加视频课程" width="150">
          <template slot-scope="scope">
            <span>{{scope.row.videos ? "是" : "否"}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="详情" width="100">
          <template slot-scope="scope">
            <el-button @click="lookStudyList(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="totalPage"></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { courses } from "@/utils/api";

import SearchForm from "./components/searchForm"

export default {
  name: "user",
  components:{
    SearchForm
  },
  data() {
    return {
      pageInfo: {
        page: 1,
        pageItem: 20,
      },
      totalPage: 1,
      tableData: [],
      loading: true,
      formInline: {
        searchVal: "",
        searchType: ""
      }
    };
  },
  methods: {
    // 获取课程列表
    async getUserList(pageInfo) {
      let data = await axios.get(courses.getCourseList, { params: { ...pageInfo } });
      data = data.data;
      if (data.code === 0) {
        this.totalPage = data.data.totalPage;
        this.tableData = data.data.list;
        this.loading = false;
      }
    },
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
