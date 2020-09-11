<template>
  <el-aside class="aside">
    <el-menu :unique-opened="true" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="users">
          <i class="el-icon-grape"></i>
          <span>用户列表</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-lock"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="roles">
          <i class="el-icon-key"></i>
          <span>角色列表</span>
        </el-menu-item>
        <el-menu-item index="rights">
          <i class="el-icon-football"></i>
          <span>权限列表</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {}
</script>

<style scoped lang='less'>
.aside {
  width: 250px !important;
  background-color: #d3dce6;
  color: #333;
}
</style>
