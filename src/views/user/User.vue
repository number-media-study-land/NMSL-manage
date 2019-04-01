<template>
  <div class="user">
    <h2>用户信息</h2>
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
    <el-dialog
      title="学习目录"
      :visible.sync="showStudyListDialog"
      @closed="handleClose"
    >
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
      <el-pagination layout="prev, pager, next" :total="pageInfo.totalPage"></el-pagination>
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
        pageItem: 20,
        totalPage: 1
      },
      tableData: [],
      studyList: [],
      loading: true,
      showStudyListDialog: false
    };
  },
  methods: {
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
    }
  },
  async mounted() {
    let data = await axios.get(user.getUserList, this.pageInfo);
    data = data.data;
    if (data.code === 0) {
      this.pageInfo.totalPage = data.data.totalPage;
      this.tableData = data.data.list;
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  padding: 5px;
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