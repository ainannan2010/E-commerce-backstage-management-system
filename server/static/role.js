import express from "express"
import Mock from "mockjs"
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

const roleList = [
  {
    id: 10,
    roleName: '主管',
    roleDesc: '技术负责人'
  },
  {
    id: 11,
    roleName: '测试角色',
    roleDesc: '测试人员'
  },
  {
    id: 12,
    roleName: '超级管理员',
    roleDesc: 'boss'
  },
  {
    id: 13,
    roleName: '开发',
    roleDesc: '搬砖的'
  },
  {
    id: 14,
    roleName: '游客',
    roleDesc: '瞎逛的'
  },
]

// 获取角色列表
Router.get('/', function (req, res) {
  const { id } = req.params
  return res.json({ ...commonSuccessReply, data: roleList })
})

export default Router
