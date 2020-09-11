import express from "express"
import Mock from "mockjs"
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

// 获取角色列表
Router.get('/', function (req, res) {
  const handleList = getTrees(roleList)
  return res.json({ ...commonSuccessReply, data: handleList })
})

// 删除角色列表
Router.delete('/:roleId/rights/:rightId', function (req, res) {
  const { roleId, rightId } = req.params
  const roleItem = roleList.find(elt => elt.id === Number(roleId))
  if (!roleItem) {
    return res.json({ ...commonFailReply, msg: '取消失败' })
  }

  const rightIndex = roleItem.rights.findIndex(elt => elt.id === Number(rightId))
  if (rightIndex <= -1) {
    return res.json({ ...commonFailReply, msg: '取消失败' })
  }

  roleItem.rights.splice(rightIndex, 1)
  getTrees(roleList) // 需要使层级一致

  return res.json({ ...commonSuccessReply, msg: '取消成功', data: roleItem.children })
})

export default Router
