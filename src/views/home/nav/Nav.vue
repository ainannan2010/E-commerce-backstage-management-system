<template>
  <el-aside class="aside">
    <el-menu :unique-opened="true" :router="true">
      <el-submenu :index="item.order" v-for="item in menusList" :key="item.id">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>{{item.authName}}</span>
        </template>
        <el-menu-item :index="elt.path" v-for="elt in item.children" :key="elt.id">
          <i class="el-icon-grape"></i>
          <span>{{elt.authName}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  props: {
    menusList: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped lang='less'>
.aside {
  width: 250px !important;
  background-color: #d3dce6;
  color: #333;
}
</style>
