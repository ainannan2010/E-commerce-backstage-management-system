import express from "express"
import list from "./repository"
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

// 获取菜单列表
Router.get('/', function (req, res) {
  return res.json({ ...commonSuccessReply, data: list })
})

export default Router
