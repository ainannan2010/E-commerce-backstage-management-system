// src/serve/index.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { default: Axios } = require('axios')
const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8888'

app.use(bodyParser.json()) // 解析post的body式传参必写

// 解决跨域
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Methods", 'PUT,GET,POST,DELETE,OPTIONS')
  res.header("Access-Control-Allow-Headers", 'X-Requested-With')
  res.header("Access-Control-Allow-Headers", 'Content-Type')
  next()
})

// get请求
app.get('/id', (req, res) => {
  const { id } = req.query
  res.send({ id })
})

// post 传参
app.post('/login', async function (req, res) {
  const { body: { userName, pwd } } = req
  const token = `${userName}-${pwd}`
  const { data: { body } } = await axios.get(`/userlist?token=${token}`)
  if (body[0]) {
    return res.send({
      msg: '登陆成功',
      status: 200,
      data: body[0]
    })
  }

  res.send({
    data: {
      msg: '用户名或密码不正确',
      status: 200,
      data: body[0]
    }
  })
})

// 开起服务
app.listen(9000, () => {
  console.log('service started successfully')
})
