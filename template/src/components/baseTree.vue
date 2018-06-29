<template>
  <div>
    <el-input v-if="data.filter ?　data.filter : false"
              :placeholder="data.placeholder ? data.placeholder : ''"
              v-model="filterText"
              @keyup.enter.native="data.handle ? data.handle(filterText): ()=>{}"
              size="small">
    </el-input>

    <el-tree v-if="!data.checkbox"
             :data="data.data|keyChange('name','label')"
             :filter-node-method="filterNode"
             accordion
             @node-click="data.nodeClick"
             ref="tree">
    </el-tree>
    <el-tree v-if="data.checkbox"
             :data="data.data|keyChange('name','label')"
             :filter-node-method="filterNode"
             show-checkbox
             node-key="id"
             :default-checked-keys="data.checkedKeys?data.checkedKeys:[]"
             @node-click="data.nodeClick"
             @check-change="data.checkChange"
             default-expand-all
             ref="tree">
    </el-tree>
  </div>
</template>

<script>
  export default {
    name: "tree",
    props: {
      data: Object
    },
    data() {
      return {
        filterText: ''
      }
    },
    watch: {
      //tree 数据监听
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      //tree 过滤input方法
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    }
  }
</script>

<style scoped>

</style>
