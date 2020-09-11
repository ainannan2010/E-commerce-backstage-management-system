import express from "express"
import Mock from "mockjs"
import rightList from "./config"
import { getTrees2 } from "../utils"

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
Router.get('/:type', function (req, res) {
  const { type } = req.params
  if (type === 'list') {
    return res.json({ ...commonSuccessReply, data: { rightList, total: rightList.length } })
  }

  let data = getTrees2(rightList)
  return res.json({ ...commonSuccessReply, data })
})

export default Router
