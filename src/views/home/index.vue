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
          <a href="#" class="loginout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

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

    .logbox {
      display: flex;
      img {
        height: 60px;
      }
      .titlebox{
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
    width: 250px!important;
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
