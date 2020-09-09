  <template>
  <div>
    <el-table :data="dataSource" style="width: 100%" :height="height" lazy>
      <template v-for="item in tableColumns">
        <el-table-column
          v-if="item.needFmt"
          :type="item.type || '' "
          :label="item.lable"
          :width="item.width"
          :key="item.lable"
        >
          <template v-slot="scope">{{scope.row.create_time | fmtDate}}</template>
        </el-table-column>

        <el-table-column
          v-else-if="item.mg_status"
          :prop="item.prop"
          :type="item.type || '' "
          :label="item.lable"
          :width="item.width"
          :key="item.lable"
        >
          <template v-slot="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="red"
              inactive-color="#aaa"
              @change="handlechange(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>

        <el-table-column
          v-else-if="item.mg_actions"
          :prop="item.prop"
          :type="item.type || '' "
          :label="item.lable"
          :width="item.width"
          :key="item.lable"
        >
          <template v-slot="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              size="mini"
              plain
              @click="showDialog(scope.row)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              plain
              @click="doDelete(scope.row.id)"
            ></el-button>
            <el-button
              type="success"
              icon="el-icon-check"
              circle
              size="mini"
              plain
              @click="showRoleDialog(scope.row)"
            ></el-button>
          </template>
        </el-table-column>

        <el-table-column
          v-else
          :prop="item.prop"
          :type="item.type || '' "
          :label="item.lable"
          :width="item.width"
          :key="item.lable"
        ></el-table-column>
      </template>
    </el-table>
    <div v-if="isShowPagination" class="pagination-container">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pages.pageNum"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pages.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    tableColumns: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    pages: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    total: {
      type: Number,
      required: true,
      default() {
        return 0
      },
    },
    height: {
      type: Number,
      required: true,
      default() {
        return 350
      },
    },
    isShowPagination: {
      type: Boolean,
      required: true,
      default() {
        return true
      },
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    doDelete(id) {
      this.$emit('doDelete', id)
    },
    showDialog(payload) {
      this.$emit('showDialog', payload)
    },
    showRoleDialog(payload) {
      this.$emit('showRoleDialog', payload)
    },
    handlechange(payload) {
      this.$emit('changeUserStatus', payload)
    },
  },
}
</script>

<style scoped>
.pagination-container {
  margin-top: 20px;
}
</style>
