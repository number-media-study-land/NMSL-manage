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
let id = 3;

export default {
  name: "videoTree",
  data() {
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
            src: ""
          }
        ]
      }
    ];
    return {
      videoTreeData: JSON.parse(JSON.stringify(data))
    };
  },
  methods: {
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
    append(data) {
      let labelVal = `${data.label}-${Number(data.children.length) + 1}`;
      const newChild = { id: id++, label: labelVal, title: "", src: "" };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
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
      .treeInput {
        width: 20%;
        margin-left: 10px;
      }
    }
  }
}
</style>
