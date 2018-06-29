<template>
  <div class="base-table">
    <el-table
      :data="data.data"
      border
      stripe
      size="small"
      highlight-current-row
      :style="{width: tableWidth}"
      :max-height="tableHeight">
      <el-table-column
        type="index"
        fixed
        width="40">
      </el-table-column>
      <el-table-column
        v-for="title in data.title"
        :key="title.prop"
        :prop="title.prop"
        :label="title.label"
        :width="title.width">
      </el-table-column>
      <el-table-column
        v-if="data.btnFlag"
        fixed="right"
        label="操作"
        :width="data.btnWidth">
        <template slot-scope="scope">
          <el-button v-for="btn in data.btns"
                     @click="btn.handle(scope.row)"
                     :key="btn.label"
                     type="text"
                     size="small">{{btn.label}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "baseTable",
    props: {
      data: Object
    },
    data() {
      return {
        tableHeight: document.body.scrollHeight - 230,
        tableWidth: `${(document.body.scrollWidth - (this.data.flowWidth ? this.data.flowWidth : 230))}px`
      }
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.changeHeight();
        this.changeWidth();
      });
    },
    methods: {
      changeHeight() {
        this.tableHeight = document.body.scrollHeight - 230;
      },
      changeWidth() {
        this.tableWidth = `${(document.body.scrollWidth - (this.data.flowWidth ? this.data.flowWidth : 230))}px`;
      }
    }
  }
</script>

<style>
  .el-table th {
    background: #eef1f8 !important;
    color: rgb(79, 79, 79)
  }

  .el-table__body tr.current-row > td {
    background: #f5f5f5 !important;
  }
</style>
