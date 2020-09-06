<template>
  <div class="loginBox">
    <el-form :label-position="labelPosition" label-width="80px" :model="formData">
      <h2>用户登陆</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      labelPosition: 'top',
      formData: {
        userName: '',
        pwd: '',
      },
    }
  },
  created() {},
  methods: {
    async doLogin() {
      try {
        const {
          data: { data: dta, message, success, token },
        } = await this.$http.post('/login', this.formData)

        if (success) {
          this.$message.success(message)
          localStorage.setItem('access_token', token)
          this.$router.push('/')
        } else {
          this.$message.error(message)
        }
      } catch (error) {
        console.log('***-err-*********:', error)
      }
    },
  },
}
</script>

<style scoped lang='less'>
.loginBox {
  height: 100%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
  }
  .el-form {
    width: 400px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
  }
  .el-button {
    width: 100%;
  }
}
</style>
