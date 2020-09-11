  <template>
  <div>
    <el-table :data="dataSource" style="width: 100%" lazy>
      <template v-for="item in tableColumns">
        <el-table-column
          v-if="item.prop === 'actions'"
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
          v-else-if="item.component"
          :prop="item.prop"
          :type="item.type || '' "
          :label="item.lable"
          :width="item.width"
          :key="item.lable"
        >
          <template v-slot="scope">
            <span v-if="!scope.row.children.length" class="el_no_data">No Authority</span>
            <el-row v-for="item in scope.row.children" :key="item.id">
              <el-col :span="4">
                <el-tag
                  closable
                  @close="removeRight(scope.row, item.id)"
                  type="success"
                >{{item.authName}}</el-tag>
                <i class="el-icon-arrow-right"></i>
              </el-col>
              <el-col :span="20">
                <el-row v-for="item2 in item.children" :key="item2.id">
                  <el-col :span="4">
                    <el-tag
                      closable
                      @close="removeRight(scope.row, item2.id)"
                      type="danger"
                    >{{item2.authName}}</el-tag>
                    <i class="el-icon-arrow-right"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-row>
                      <el-col>
                        <el-tag
                          v-for="item3 in item2.children"
                          :key="item3.id"
                          closable
                          @close="removeRight(scope.row,item3.id)"
                        >{{item3.authName}}</el-tag>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
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
  },
  methods: {
    doDelete(id) {
      this.$emit('doDelete', id)
    },
    showDialog(payload) {
      this.$emit('showDialog', payload)
    },
    showRoleDialog(payload) {
      this.$emit('showRoleDialog', payload)
    },
    // 取消权限
    removeRight(...arg) {
      this.$emit('removeRight', arg)
    },
  },
}
</script>

<style scoped>
.el-tag {
  margin: 3px;
}
.el_no_data {
  font-size: 16px;
}
</style>
