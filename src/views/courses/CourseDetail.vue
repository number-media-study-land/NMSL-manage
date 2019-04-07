<template>
  <div class="courseDetail">
    <el-button type="primary" size="small" icon="el-icon-arrow-left" @click="turnBack">返回</el-button>
    <div class="courseDetailWrapper">
      <el-form
        v-loading="loading"
        :rules="rules"
        label-position="right"
        label-width="140px"
        :model="formInline"
        ref="formInline"
      >
        <el-form-item v-if="this.$route.query._id" label="课程id：" prop="_id">
          <span>{{formInline._id}}</span>
        </el-form-item>
        <el-form-item label="课程名称：" prop="name">
          <el-input
            class="inputStyle"
            placeholder="不超过10字"
            maxlength="10"
            v-model="formInline.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="课程类型：" prop="type">
          <el-select v-model="formInline.type">
            <el-option label="图像处理" value="图像处理"></el-option>
            <el-option label="音频处理" value="音频处理"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程难度：" prop="level">
          <el-select v-model="formInline.level">
            <el-option label="入门" value="入门"></el-option>
            <el-option label="初级" value="初级"></el-option>
            <el-option label="中级" value="中级"></el-option>
            <el-option label="高级" value="高级"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程简介：" prop="intro">
          <el-input
            class="inputStyle"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 3}"
            placeholder="简介最多50字"
            maxlength="50"
            v-model="formInline.intro"
          ></el-input>
        </el-form-item>
        <el-form-item label="详情内容：" prop="detail">
          <el-input
            class="inputStyle"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5}"
            placeholder="详情不限字数"
            v-model="formInline.detail"
          ></el-input>
        </el-form-item>
        <el-form-item label="学习时间：" prop="time">
          <el-input-number v-model="formInline.time" :precision="2" :step="1" :max="100"></el-input-number>
          <span class="inputSuffix">小时</span>
        </el-form-item>
        <el-form-item label="课程封面：" prop="cover">
          <el-input class="inputStyle" placeholder="填入封面地址" v-model="formInline.cover"></el-input>
        </el-form-item>
        <el-form-item v-if="this.$route.query._id" label="是否添加课程视频：" prop="videos">
          <span>{{formInline.video ? "是" : "否"}}</span>
        </el-form-item>
        <el-form-item v-if="this.$route.query._id">
          <el-button type="success" @click="updateCourse('formInline')">更新课程</el-button>
          <el-button type="danger" @click="delDialogVisible = true">删除课程</el-button>
        </el-form-item>
        <el-form-item v-else>
          <el-button type="primary" @click="addNewCourse('formInline')">添加课程</el-button>
          <el-button @click="resetForm('formInline')">重置内容</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog v-loading="loading" title="确定删除该课程吗" :visible.sync="delDialogVisible" width="30%">
      <span>此操作不可逆</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delCourse">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { courses, courseDetail } from "@/utils/api";

export default {
  name: "courseDetail",
  components: {},
  data() {
    const validateTime = (rule, value, callback) => {
      if (value === 0) {
        callback(new Error("预计学习时间不能为0"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      delDialogVisible: false,
      formInline: {
        name: "",
        type: "",
        level: "",
        intro: "",
        detail: "",
        time: 0,
        cover: "",
        videos: null,
        _id: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入课程名称", trigger: "change" }
        ],
        type: [
          { required: true, message: "请选择课程分类", trigger: "change" }
        ],
        level: [
          { required: true, message: "请选择课程难度", trigger: "change" }
        ],
        intro: [
          { required: true, message: "请输入课程简介", trigger: "change" }
        ],
        detail: [
          { required: true, message: "请输入课程详细介绍", trigger: "change" }
        ],
        time: [{ validator: validateTime, trigger: "change" }],
        cover: [{ required: true, message: "请填写封面地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    turnBack() {
      this.$router.push({ path: `/manage/courses` });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 添加课程
    async addNewCourse(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let params = JSON.parse(JSON.stringify(this.formInline));
          delete params.videos;
          delete params._id;
          let data = await axios.post(courseDetail.addCourse, params);
          data = data.data;
          if (data.code === 0) {
            this.$message.success(data.msg);
          } else {
            this.$message.error(data.msg);
          }
        } else {
          return false;
        }
      });
    },
    // 更新课程
    async updateCourse(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let params = JSON.parse(JSON.stringify(this.formInline));
          delete params.videos;
          delete params._id;
          delete params.__v;

          let data = await axios.post(courseDetail.updateCourse, params);
          data = data.data;
          if (data.code === 0) {
            this.$message.success(data.msg);
          } else {
            this.$message.error(data.msg);
          }
        } else {
          return false;
        }
      });
    },
    // 删除课程
    async delCourse() {
      this.loading = true;
      let data = await axios.post(courseDetail.delCourse, {
        _id: this.formInline._id
      });
      data = data.data;
      if (data.code === 0) {
        this.$message.success(`${data.msg}, 3秒后返回上一页`, 5);
        setTimeout(() => {
          this.$router.push({ path: `/manage/courses` });
        }, 3000);
      } else {
        this.$message.error(data.msg);
      }
    },
    // 获取课程内容
    async getCourseDetail(_id) {
      let data = await axios.get(courses.getCourseDetail, {
        params: { _id }
      });
      data = data.data;
      if (data.code === 0) {
        this.formInline = data.data;
        this.loading = false;
      }
    }
  },
  mounted() {
    if (this.$route.query._id) {
      this.loading = true;
      this.getCourseDetail(this.$route.query._id);
    }
  }
};
</script>

<style lang="less" scoped>
.courseDetail {
  .courseDetailWrapper {
    margin-top: 30px;
    .inputStyle {
      width: 30vw;
    }
    .inputSuffix {
      display: inline-block;
      width: 40px;
      height: 39px;
      background-color: #f5f7fa;
      text-align: center;
      border: 1px solid #dcdfe6;
      border-left: 0;
      border-radius: 5px;
    }
  }
}
</style>
