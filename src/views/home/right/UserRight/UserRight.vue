<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <custom_breadcrumb level1="权限管理" level2="权限列表" />

    <!-- 权限列表展示 -->
    <TableList
      :datasource="tableData.rightList"
      :tableColumns="tableColumns"
      isShowPagination
      :total="tableData.total"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    />
  </el-card>
</template>
<script>
import TableList from '@/views/home/right/UserRight/TableRightList.vue'

export default {
  data() {
    return {
      tableData: {
        rightList: [],
        total: 0,
      },
      tableColumns: [
        { type: 'index', lable: '#', width: 50 },
        { prop: 'authName', lable: '权限名称', width: 80 },
        { prop: 'path', lable: '路径', width: 150 },
        { prop: 'level', lable: '层级' },
      ],
    }
  },
  components: {
    TableList,
  },
  created() {
    this.getRightList()
  },
  methods: {
    async getRightList() {
      try {
        const { data } = await this.$http.get('/rights/list')
        this.tableData = data
      } catch (error) {}
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  },
}
</script>

<style scoped lang="less">
.box-card {
  height: 99%;
}
</style>
