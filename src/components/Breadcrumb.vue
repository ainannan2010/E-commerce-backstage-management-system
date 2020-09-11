<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="el-bread">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{level1}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'custom_breadcrumb',
  data() {
    return {}
  },
  props: ['level1', 'level2'],
}
</script>

<style scoped>
.el-bread {
  margin-bottom: 20px;
}
</style>
