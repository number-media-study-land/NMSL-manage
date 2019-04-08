<template>
  <div class="courseVideos">
    <el-button-group>
      <el-button type="primary" size="small" icon="el-icon-arrow-left" @click="turnBack()">返回</el-button>
      <el-button type="primary" size="small" icon="el-icon-document" @click="turnBack('courses')">首页</el-button>
    </el-button-group>
    <div class="formBox">
      <p class="formItem" style="border:0">课程名：{{name}}</p>
      <p class="formItem">课程每章节视频：</p>
      <video-tree ref="videoTree" @postVideoData="postVideoData"/>
      <div class="formBtn formItem">
        <el-button v-if="videos===true || videos==='true'" type="success" @click="getVideosData()">更新</el-button>
        <el-button v-else type="primary" @click="getVideosData()">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { courseVideoDetail } from "@/utils/api";
import VideoTree from "./components/VideoTree";

export default {
  name: "courseVideos",
  components: {
    VideoTree
  },
  data() {
    return {
      name: "",
      videos: false
    };
  },
  methods: {
    turnBack(address) {
      if (address) {
        this.$router.push({ path: `/manage/${address}` });
      } else {
        this.$router.go(-1);
      }
    },
    // 获取视频数据
    getVideosData() {
      this.$refs.videoTree.returnVideosData(this.name);
    },
    // 提交视频数据
    async postVideoData(params) {
      let data = await axios.post(courseVideoDetail.addCourseVideo, params);
      data = data.data;
      if (data.code === 0) {
        this.$message.success(data.msg);
      } else {
        this.$message.error(data.msg);
      }
    }
  },
  mounted() {
    this.name = this.$route.query.name;
    this.videos = this.$route.query.videos;
  }
};
</script>

<style lang="less" scoped>
.courseVideos {
  .formBox {
    width: 80%;
    padding: 8px;
    margin-top: 30px;
    font-size: 14px;
    background-color: #fff;

    .formItem {
      padding: 10px 0 10px 20px;
      border-top: 1px solid #ececec;
      margin: 0;
      font-size: 16px;
    }

    .formBtn {
      margin-top: 10px;
    }
  }
}
</style>
