  <template>
  <el-table :data="dataSource" style="width: 100%">
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
          <el-switch v-model="scope.row.status" active-color="red" inactive-color="#aaa"></el-switch>
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
          <el-button type="primary" icon="el-icon-edit" circle size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" circle size="mini" plain></el-button>
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
  },
}
</script>
