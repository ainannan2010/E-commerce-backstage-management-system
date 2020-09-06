<template>
  <el-header>
    <el-row>
      <el-col :span="5">
        <div class="logbox">
          <img src="../../../assets/logo.jpg" alt />
          <div class="titlebox">
            <span>通号集团™</span>
            <span>www.tonghao.com</span>
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
</template>
<script>
export default {
  methods: {
    doLogout() {
      localStorage.clear()
      this.$message.success('退出成功')
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped lang='less'>
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
</style>
