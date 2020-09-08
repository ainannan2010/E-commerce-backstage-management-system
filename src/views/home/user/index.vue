<template>
  <el-card class="box-card">
    <Breadcrumb />
    <!-- 搜索 -->
    <el-row>
      <el-col>
        <el-input placeholder="请输入内容" v-model="queryData.query" class="input-with-search" clearable>
          <el-button slot="append" icon="el-icon-search" @click="doSearch"></el-button>
        </el-input>
        <el-button type="success" @click="dialogFormVisible = true">添加用户</el-button>
      </el-col>
    </el-row>

    <!-- 添加用户 -->
    <AddUser :dialogFormVisible="dialogFormVisible" @closeDialog="closeDialog" @addUser="addUser" />

    <!-- 用户列表 -->
    <CustomTable
      :data-source="tableData.userList"
      :tableColumns="tableColumns"
      :height="550"
      isShowPagination
      :pages="queryData"
      :total="tableData.total"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      @doDelete="doDelete"
    />
  </el-card>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import CustomTable from '@/components/CustomTable.vue'
import AddUser from '@/views/home/user/AddUser.vue'

export default {
  components: {
    Breadcrumb,
    CustomTable,
    AddUser,
  },
  data() {
    return {
      queryData: {
        query: '',
        pageNum: 1,
        pageSize: 10,
      },
      tableData: {
        userList: [],
        total: 0,
      },
      dialogFormVisible: false,
      tableColumns: [
        { type: 'index', lable: '#', width: 50 },
        { prop: 'username', lable: '姓名', width: 80 },
        { prop: 'email', lable: '邮箱', width: 150 },
        { prop: 'mobile', lable: '电话' },
        { prop: 'create_time', lable: '创建时间', needFmt: true },
        { prop: 'status', lable: '用户状态', mg_status: true },
        { prop: 'actions', lable: '操作', mg_actions: true },
      ],
    }
  },
  methods: {
    async getUserList() {
      try {
        const {
          data: { data: dta },
        } = await this.$http.get(`/users`, {
          params: this.queryData,
        })

        this.tableData = dta
      } catch (error) {
        console.log('***-error-*********:', error) // eslint-disable-line
      }
    },
    async addUser(payload) {
      try {
        const { data } = await this.$http.post('/users', payload)

        this.$message.success(data.msg)
        this.getUserList()
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
            const {
              data: { msg },
            } = await this.$http.delete(`/users/${id}`)
            this.$message({
              type: 'success',
              message: msg,
            })
            this.getUserList()
          } catch (error) {
            this.$message({
              type: 'error',
              message: '删除失败!',
            })
          }
        })
        .catch(() => {})
    },
    handleSizeChange(val) {
      this.queryData.pageSize = val
      this.getUserList()
    },
    handleCurrentChange(val) {
      this.queryData.pageNum = val
      setTimeout(async () => {
        await this.getUserList()
      })
    },
    doSearch() {
      this.getUserList()
    },
    closeDialog() {
      this.dialogFormVisible = false
    },
  },
  created() {
    this.getUserList()
  },
}
</script>
<style scoped lang="less">
.box-card {
  height: 99%;
  .input-with-search {
    margin: 10px 5px 10px 0;
    width: 300px;
  }
}
</style>
