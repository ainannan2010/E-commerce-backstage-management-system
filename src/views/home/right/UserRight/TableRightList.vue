<template>
  <el-table :data="datasource" border style="width: 100%" height="550">
    <template v-for="item in tableColumns">
      <el-table-column
        v-if="item.prop === 'level'"
        :type="item.type || '' "
        :label="item.lable"
        :prop="item.prop"
        :width="item.width"
        :key="item.lable"
      >
        <template v-slot="scope">{{scope.row.level | handleLevel}}</template>
      </el-table-column>

      <el-table-column
        v-else
        :type="item.type || '' "
        :label="item.lable"
        :prop="item.prop"
        :width="item.width"
        :key="item.lable"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script>
// 全局过滤器
export default {
  props: {
    datasource: {
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
    isShowPagination: {
      type: Boolean,
      required: true,
      default() {
        return true
      },
    },
  },
  filters: {
    handleLevel(level) {
      switch (level) {
        case '0':
          return '一级'
        case '1':
          return '二级'
        case '2':
          return '三级'
        default:
          return ''
      }
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
  },
}
</script>
