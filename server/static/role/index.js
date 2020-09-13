import express from "express"
import lodash from "lodash"
import rightConfig from "../right/config"
import roleList from "./roleList"
import {
  getTrees,
} from "../utils"

const Router = express.Router();
const commonSuccessReply = {
  data: {},
  code: 1,
  success: true,
  msg: 'success'
}

const commonFailReply = {
  data: null,
  code: 0,
  success: false,
  msg: 'error'
}

const handleRight = (list) => {
  list.map(elt => {
    let arr = elt.rights.split(',')
    const rightArr = []
    arr.map(i => {
      const item = rightConfig.find(e => String(e.id) === i)
      return rightArr.push(item)
    })
    elt.rightArr = lodash.cloneDeep(rightArr)
  })
}

// 获取角色列表
Router.get('/', function (req, res) {
  handleRight(roleList)
  const processedList = getTrees(roleList)
  return res.json({ ...commonSuccessReply, data: processedList })
})

// 批量更新角色权限列表
Router.post('/:roleId/rights', function (req, res) {
  const { roleId } = req.params
  const { pids } = req.body
  console.log('***-pids-*********:', pids) // eslint-disable-line
  const roleItem = roleList.find(elt => String(elt.id) === roleId)
  if (!roleItem) {
    return res.json({ ...commonFailReply, msg: '修改失败' })
  }

  roleItem.rights = pids.join()
  return res.json({ ...commonSuccessReply, msg: '修改成功' })
})

// 单个删除角色权限列表
Router.delete('/:roleId/rights/:rightId', function (req, res) {
  const { roleId, rightId } = req.params
  const roleItem = roleList.find(elt => elt.id === Number(roleId))
  if (!roleItem) {
    return res.json({ ...commonFailReply, msg: '取消失败' })
  }

  const rightIndex = roleItem.rightArr.findIndex(elt => elt.id === Number(rightId))
  if (rightIndex <= -1) {
    return res.json({ ...commonFailReply, msg: '取消失败' })
  }

  console.log('***-11-*********:', roleItem.rights, rightIndex) // eslint-disable-line
  let arr = roleItem.rights.split(',')
  arr.splice(rightIndex, 1)
  roleItem.rights = arr.join('')
  roleItem.rightArr.splice(rightIndex, 1)
  // 需要使层级一致, 处理渲染的children
  getTrees(roleList)

  return res.json({ ...commonSuccessReply, msg: '取消成功', data: roleItem.children })
})

export default Router
