<template>
  <div class="courseDetail">课程详情</div>
</template>

<script>
import axios from "@/utils/axios";
import { courses } from "@/utils/api";

export default {
  name: "courseDetail",
  components: {},
  data() {
    return {
      loading: true
    };
  },
  methods: {
    async getCourseDetail(_id) {
      let data = await axios.get(courses.getCourseDetail, {
        params: { _id }
      });
      data = data.data;
      if (data.code === 0) {
        console.log(data);
      }
    }
  },
  mounted() {
    if (this.$route.query._id) {
      this.getCourseDetail(this.$route.query._id);
    }
  }
};
</script>

<style lang="less" scoped>
.courseDetail {
}
</style>
