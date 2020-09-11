<template>
  <el-dialog title="设置权限" :visible.sync="dialogVisible" :before-close="handleClose">
    <!-- "
    -->
    <el-tree
      :data="datasource"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      default-expand-all
      :default-checked-keys="defaultRightList"
    ></el-tree>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      required: true,
      default() {
        return false
      },
    },
    datasource: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    defaultRightList: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    arrexpand: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    defaultProps: {
      type: Object,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      form: {},
      formLabelWidth: '120px',
    }
  },
  created() {},
  methods: {
    handleClose() {
      this.closeDialog()
    },
    async closeDialog() {
      await this.$emit('closeDialog')
      this.form = {}
    },
    async handleSubmit() {
      try {
        await this.$emit('setRoleRight', this.form)
        this.closeDialog()
      } catch (error) {}
    },
  },
}
</script>
<style scoped lang="less">
</style>
