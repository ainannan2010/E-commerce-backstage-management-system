<template>
  <el-dialog title="新增用户" :visible.sync="dialogFormVisible" :before-close="handleClose">
    <el-form :model="form">
      <el-form-item label="用户名称" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input v-model="form.mobile" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogFormVisible: {
      type: Boolean,
      required: true,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
        email: '',
        mobile: '',
      },
      formLabelWidth: '120px',
    }
  },
  methods: {
    handleClose() {
      this.closeDialog()
    },
    async closeDialog() {
      await this.$emit('closeDialog')
      this.form = {
        username: '',
        password: '',
        email: '',
        mobile: '',
      }
    },
    async handleSubmit() {
      try {
        await this.$emit('addUser', this.form)
        this.closeDialog()
      } catch (error) {}
    },
  },
}
</script>
<style scoped lang="less">
</style>
