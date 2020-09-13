<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <custom_breadcrumb level1="权限管理" level2="角色列表" />

    <!-- 添加角色 -->
    <el-row>
      <el-col>
        <el-button type="info" @click="dialogFormVisible = true">添加角色</el-button>
      </el-col>
    </el-row>

    <!-- 角色列表展示 -->
    <TableList
      :data-source="roleList"
      :tableColumns="tableColumns"
      @doDelete="doDelete"
      @showDialog="showDialog"
      @showRoleDialog="showRoleDialog"
      @removeRight="removeRight"
    />

    <!-- 设置角色权限 -->
    <SetRolerRight
      :dialogVisible="setRoleDialogVisible"
      :datasource="rightList"
      :defaultProps="defaultProps"
      :arrexpand="arrexpand"
      :defaultRightList="defaultRightList"
      @closeDialog="closeDialog"
      @setRoleRight="setRoleRight"
    />
  </el-card>
</template>

<script>
import TableList from '@/views/home/right/UserRole/TableRoleList.vue'
import SetRolerRight from '@/views/home/right/UserRole/SetRolerRight.vue'
import { getRightId, getRightId2 } from '@/utils'

export default {
  data() {
    return {
      roleList: [],
      rightList: [],
      setRoleDialogVisible: false,
      tableColumns: [
        { type: 'expand', lable: '', width: 50, component: true },
        { type: 'index', lable: '#', width: 100 },
        { prop: 'roleName', lable: '角色名称', width: 200 },
        { prop: 'roleDesc', lable: '角色描述', width: 300 },
        { prop: 'actions', lable: '操作' },
      ],
      defaultProps: {
        label: 'authName',
        children: 'children',
      },
      arrexpand: [],
      defaultRightList: [],
    }
  },
  components: {
    TableList,
    SetRolerRight,
  },
  created() {
    this.getRoleList()
  },
  methods: {
    async getRoleList() {
      try {
        const { data } = await this.$http.get('/roles')
        this.roleList = data
      } catch (error) {}
    },
    doDelete(id) {
      this.$confirm('此操作不可逆，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          try {
            const { msg } = await this.$http.delete(`/users/${id}`)
            this.$message({
              type: 'success',
              message: msg,
            })
            this.getRoleList()
          } catch (error) {
            this.$message({
              type: 'error',
              message: '删除失败!',
            })
          }
        })
        .catch(() => {})
    },
    showDialog(payload) {
      this.editData = { ...payload } // 浅拷贝一下
      this.setRoleDialogVisible = true
    },
    async showRoleDialog(payload) {
      const { data } = await this.$http.get('/rights/tree')
      this.roleId = payload.id
      this.rightList = data

      // getRightId(payload, this.defaultRightList) // 获取默认展开选中项
      this.defaultRightList = getRightId2(payload.children) // 二选一
      this.setRoleDialogVisible = true
    },
    closeDialog() {
      this.setRoleDialogVisible = false
    },
    async setRoleRight(payload) {
      try {
        const { msg } = await this.$http.post(`/roles/${this.roleId}/rights`, {
          pids: payload,
        })

        this.$message(msg)
        this.getRoleList()
        this.closeDialog()
      } catch (error) {}
    },
    async removeRight(payload) {
      let [role, rightId] = payload
      try {
        const { msg, data } = await this.$http.delete(
          `/roles/${role.id}/rights/${rightId}`
        )
        this.$message.success(msg)
        role.children = data
        // this.getRoleList()
      } catch (error) {}
    },
  },
}
</script>

<style scoped lang="less">
.box-card {
  height: 99%;
}
</style>
