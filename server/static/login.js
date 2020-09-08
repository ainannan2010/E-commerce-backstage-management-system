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

Router.post('/', function (req, res) {
  const { userName, pwd } = req.body
  if (userName !== 'yangwuc' || pwd !== "123") {
    return res.json({
      ...commonFailReply,
      msg: '用户名和密码不匹配'
    })
  }

  return res.json({ ...commonSuccessReply, token: 'asdfgbnhjhyg@#$%^&*YUIsdfghj', msg: '登录成功', })
})

export default Router
