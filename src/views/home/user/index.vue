<template>
  <el-card class="box-card">
    <Breadcrumb />
    <el-row>
      <el-col>
        <el-input placeholder="请输入内容" v-model="queryData.query" class="input-with-search">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success">添加用户</el-button>
      </el-col>
    </el-row>
    <CustomTable :data-source="tableData.userList" :tableColumns="tableColumns" />
  </el-card>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import CustomTable from '@/components/CustomTable.vue'

export default {
  components: {
    Breadcrumb,
    CustomTable,
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
        total: 0
      },
      tableColumns: [
        { type: 'index', lable: '#', width: 50 },
        { prop: 'name', lable: '姓名', width: 80 },
        { prop: 'email', lable: '邮箱', width: 150 },
        { prop: 'phone', lable: '电话' },
        { prop: 'create_time', lable: '创建时间', needFmt: true },
        { prop: 'status', lable: '用户状态', mg_status: true },
        { prop: 'actions', lable: '操作', mg_actions: true },
      ],
    }
  },
  methods: {
    async getUserList() {
      try {
        const { data } = await this.$http.get(`/users`, {
          params: this.queryData,
        })
        this.tableData = data
      } catch (error) {
        console.log('***-error-*********:', error) // eslint-disable-line
      }
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
