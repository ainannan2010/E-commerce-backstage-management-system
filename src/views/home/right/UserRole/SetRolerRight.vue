<template>
  <el-dialog title="设置权限" :visible.sync="dialogVisible" :before-close="handleClose">
    <el-tree
      ref="roleTree"
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
    },
    async handleSubmit() {
      try {
        let hrefChecked = this.$refs.roleTree.getHalfCheckedKeys() // 获取半选的key所在的数组
        let allChecked = this.$refs.roleTree.getCheckedKeys() // 获取半选的key所在的数组

        let checkArr = [
          ...allChecked, // 获取全选的key所在的数组
          ...hrefChecked,
        ]
        await this.$emit('setRoleRight', checkArr)
        this.closeDialog()
      } catch (error) {
        console.log('***-error-*********:', error)
      }
    },
  },
}
</script>
<style scoped lang="less">
</style>
