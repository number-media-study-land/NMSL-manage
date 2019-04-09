<template>
  <div class="courses">
    <h2>课程信息</h2>
    <div class="searchArea">
      <search-form @beforeSearch="beforeSearch"/>
    </div>
    <div class="addNewCourseArea">
      <el-button type="success" plain @click="toStudyList()">添加新课程</el-button>
    </div>
    <div class="tableArea">
      <el-table v-loading="loading" :data="tableData" border style="width: 100%">
        <el-table-column prop="_id" label="id"></el-table-column>
        <el-table-column prop="name" label="课程名"></el-table-column>
        <el-table-column prop="type" label="课程类型"></el-table-column>
        <el-table-column prop="level" label="课程难度"></el-table-column>
        <el-table-column prop="time" label="学习时间 /小时"></el-table-column>
        <el-table-column fixed="right" label="是否添加课程视频" width="150">
          <template slot-scope="scope">
            <span>{{scope.row.videos ? "是" : "否"}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="详情" width="100">
          <template slot-scope="scope">
            <el-button @click="toStudyList(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="totalPage" @current-change="changePage"></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { courses } from "@/utils/api";

import SearchForm from "./components/searchForm";

export default {
  name: "courses",
  components: {
    SearchForm
  },
  data() {
    return {
      pageInfo: {
        page: 1,
        pageItem: 20
      },
      totalPage: 10,
      tableData: [],
      loading: true,
      formInline: {
        searchVal: "",
        searchType: ""
      }
    };
  },
  methods: {
    // 搜索前处理
    beforeSearch(params) {
      this.pageInfo = { page: 1, pageItem: 20, ...params };
      this.getCourseList(this.pageInfo);
    },
    // 获取课程列表
    async getCourseList(pageInfo) {
      let data = await axios.get(courses.getCourseList, {
        params: { ...pageInfo }
      });
      data = data.data;
      if (data.code === 0) {
        this.totalPage = data.data.totalPage * 10;
        this.tableData = data.data.list;
        this.loading = false;
      }
    },
    // 进入课程详情 / 添加课程
    toStudyList(row) {
      let query = {};
      if (row) {
        query = { _id: row._id };
      }
      this.$router.push({ path: `/manage/courseDetail`, query });
    },
    // 分页
    changePage(nowPage) {
      this.pageInfo.page = nowPage;
      this.getCourseList(this.pageInfo);
    }
  },
  mounted() {
    this.getCourseList(this.pageInfo);
  }
};
</script>

<style lang="less" scoped>
.courses {
  padding: 5px;
  .searchArea {
    margin: 20px 0;
  }
  .addNewCourseArea {
    text-align: right;
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
