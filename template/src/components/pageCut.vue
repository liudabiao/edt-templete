<template>
  <el-pagination
    @size-change="page.sizeChange"
    @current-change="page.currentChange"
    :current-page="1"
    :page-sizes="[10, 15, 20, 25]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    background
    :total="page.total">
  </el-pagination>
</template>

<script>
  export default {
    name: "pageCut",
    props: {
      page: Object
    }
  }
</script>

<style scoped>

</style>
