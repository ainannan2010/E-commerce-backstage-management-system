<template>
  <el-dialog title="角色配置" :visible.sync="dialogFormVisible" :before-close="handleClose">
    <el-form :model="form">
      <el-form-item label="用户名称" :label-width="formLabelWidth">
        <el-input v-model="form.username" autocomplete="off" disabled></el-input>
      </el-form-item>
      <el-form-item label="用户角色" :label-width="formLabelWidth">
        <el-select v-model="form.role_id" placeholder="请选择">
          <el-option
            v-for="item in roleList"
            :key="item.value"
            :label="item.roleName"
            :value="item.id"
          ></el-option>
        </el-select>
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
    roleData: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      formLabelWidth: '120px',
      roleList: [],
      value: '',
    }
  },
  computed: {
    form() {
      return this.roleData
    },
  },
  created() {
    this.getRolelist()
  },
  methods: {
    handleClose() {
      this.closeDialog()
    },
    async getRolelist() {
      try {
        const { data } = await this.$http.get('/roles')
        this.roleList = data || []
      } catch (error) {}
    },
    async closeDialog() {
      await this.$emit('closeDialog')
    },
    async handleSubmit() {
      try {
        await this.$emit('setRole', this.form)
        this.closeDialog()
      } catch (error) {}
    },
  },
}
</script>
<style scoped lang="less">
</style>
