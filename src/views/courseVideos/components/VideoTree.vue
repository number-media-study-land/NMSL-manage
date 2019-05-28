<template>
  <div class="videoTree">
    <div class="clear-float">
      <el-button class="appendCap" size="mini" plain @click="appendCap()">添加章节</el-button>
    </div>
    <el-tree
      class="treeStyle"
      :data="videoTreeData"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label.indexOf('-') === -1 ? `第${node.label}章` : `${node.label}.` }}</span>
        <el-input v-model="data.title" size="mini" class="treeInput" placeholder="请输入标题"></el-input>
        <el-input
          v-if="data.src !== undefined"
          v-model="data.src"
          size="mini"
          class="treeInput"
          placeholder="请输入视频地址"
        ></el-input>
        <el-input
          v-if="data.src !== undefined"
          type="textarea"
          autosize
          size="mini"
          class="treeQAInput"
          placeholder="如果需要，可在此处输入本节问题"
          v-model="data.qa">
        </el-input>
        <span class="treeBtn">
          <el-button
            v-if="data.src === undefined"
            type="text"
            size="mini"
            @click="() => append(data)"
          >添加子节</el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">删除本行</el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import { courses } from "@/utils/api";

let id = 1;
export default {
  name: "videoTree",
  data() {
    return {
      videoTreeData: [],
      dialogVisible: false
    };
  },
  methods: {
    // 添加章节
    appendCap() {
      let label = (Number(this.videoTreeData.length) + 1).toString();
      const newChild = {
        id: id++,
        label,
        title: "",
        children: []
      };
      this.videoTreeData.push(newChild);
    },
    // 插入行
    append(data) {
      let labelVal = `${data.label}-${Number(data.children.length) + 1}`;
      const newChild = {
        id: id++,
        label: labelVal,
        title: "",
        src: "",
        qa: ""
      };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },
    // 删除行
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    // 把值反给父组件
    returnVideosData(name) {
      let params = this.transVideosDataToParams(name);
      if (typeof params === "string") {
        this.$message.error(params);
      } else {
        this.$emit("postVideoData", params);
      }
    },
    // 把tree的值转换成接口需要的格式
    transVideosDataToParams(name) {
      let videoList = [];

      for (let obj of this.videoTreeData) {
        let list = [];
        if (obj.title === "") {
          return "请填写章节名";
        }
        if (obj.children.length > 0) {
          for (let C_obj of obj.children) {
            if (C_obj.title !== "" && C_obj.src !== "") {
              list.push({
                title: C_obj.title.trim(),
                src: C_obj.src,
                qa: C_obj.qa
              });
            } else {
              return "请保证每一个输入框都有内容，否则删除对应课程";
            }
          }
        } else {
          return "请保证每一章都要有课程，否则删除对应章";
        }
        videoList.push({
          title: obj.title.trim(),
          list
        });
      }

      let params = {
        name,
        videoList
      };
      return params;
    },
    // 获取视频内容
    async getVideoData() {
      let data = await axios.get(courses.getCourseVideo, {
        params: {
          _id: this.$route.query._id
        }
      });
      data = data.data;
      if (data.code === 0) {
        this.transParamsToVideosData(data.data.videoList);
      } else {
        this.$message.error({
          message: `错误：${data.msg}`,
          duration: 7000
        });
      }
    },
    // 把接口返回的值转换成tree需要的格式
    transParamsToVideosData(arr) {
      let data = [];

      let newid = 0;
      let o_label = 0;
      for (let obj of arr) {
        let children = [];

        o_label += 1;
        let o_id = ++newid;
        let C_label = 0;
        if (obj.list) {
          for (const C_obj of obj.list) {
            children.push({
              id: ++newid,
              label: `${o_label}-${++C_label}`,
              title: C_obj.title,
              src: C_obj.src,
              qa: C_obj.qa
            });
          }
        }
        data.push({
          id: o_id,
          label: o_label.toString(),
          title: obj.title,
          children
        });
      }
      id = ++newid;
      this.videoTreeData = JSON.parse(JSON.stringify(data));
    }
  },
  mounted() {
    if (
      this.$route.query.videos === false ||
      this.$route.query.videos === "false"
    ) {
      id = 3;
      const data = [
        {
          id: 1,
          label: "1",
          title: "",
          children: [
            {
              id: 2,
              label: "1-1",
              title: "",
              src: "",
              qa: ""
            }
          ]
        }
      ];
      this.videoTreeData = JSON.parse(JSON.stringify(data));
    } else {
      this.getVideoData();
    }
  }
};
</script>

<style lang="less" scoped>
.videoTree {
  .appendCap {
    float: right;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .treeStyle {
    width: 100%;

    .custom-tree-node {
      width: 100%;
      line-height: 28px;

      .treeBtn {
        float: right;
        margin-right: 10px;
      }
      .treeQAbtn {
        margin-left: 10px;
      }
      .treeInput {
        width: 20%;
        margin-left: 10px;
      }
      .treeQAInput {
        width: 40%;
        margin-left: 10px;
      }
    }
  }
}
</style>
