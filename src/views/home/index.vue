<template>
  <el-container class="container">
    <el-header>
      <el-row>
        <el-col :span="5">
          <div class="logbox">
            <img src="../../assets/logo.jpg" alt />
            <div class="titlebox">
              <span>通号集团™</span>
              <span>tonghao.com</span>
            </div>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="subheading">通号后台管理系统</div>
        </el-col>
        <el-col :span="2">
          <a href="#" class="loginout" @click.prevent="doLogout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <el-menu unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-4-1">
              <i class="el-icon-location"></i>
              <span>选项1</span>
            </el-menu-item>
            <el-menu-item index="1-4-2">
              <i class="el-icon-location"></i>
              <span>选项2</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>导航2</span>
            </template>
            <el-menu-item index="2-4-1">
              <i class="el-icon-location"></i>
              <span>选项1</span>
            </el-menu-item>
            <el-menu-item index="2-4-2">
              <i class="el-icon-location"></i>
              <span>选项2</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  beforeCreate() {
    const access_token = localStorage.getItem('access_token')
    if (!access_token) {
      this.$router.push('/login')
    }
  },
  methods: {
    doLogout() {
      localStorage.clear()
      this.$message.success('退出成功')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang='less'>
* {
  padding: 0;
  margin: 0;
}

.container {
  height: 100%;
  padding: 1px;
  background-color: #eee;
  .el-header {
    background-color: #fff;
    height: 60px;
    margin-bottom: 2px;
    .logbox {
      display: flex;
      img {
        height: 60px;
      }
      .titlebox {
        margin-left: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }

    .el-row,
    .el-col {
      div {
        height: 100%;
      }

      height: 100%;
    }

    .subheading {
      text-align: center;
      line-height: 60px;
      font-weight: 700;
      font-size: 22px;
    }

    .loginout {
      line-height: 60px;
    }
  }

  .aside {
    width: 250px !important;
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    height: 160px;
  }
}
</style>
