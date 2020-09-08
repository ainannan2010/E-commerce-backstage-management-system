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
// 自定义拓展
Mock.Random.extend({
  mobile: function () {
    var phonePrefixs = ['132', '135', '189', '139', '188', '187']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  }
})
let data = Mock.mock({
  "data|52": [
    {
      username: '@cname',
      email: '@email',
      'create_time|564577990837-2564577990837': 0,
      mobile: '@mobile',
      status: '@boolean',
      id: '@id'
    }
  ]
})
let { data: dta } = data

// 增
Router.post('/', function (req, res) {
  dta.unshift({ ...req.body, id: Mock.mock('@id'), create_time: Date.now() })
  return res.json({ ...commonSuccessReply, msg: '新增成功!' })
})

// 删
Router.delete('/:id', function (req, res) {
  const { id } = req.params
  let index = dta.findIndex(elt => elt.id === id)
  if (index <= -1) {
    return res.json({ ...commonFailReply, msg: '删除失败!' })
  }

  dta.splice(index, 1)
  return res.json({ ...commonSuccessReply, msg: '删除成功!' })
})

// 改
Router.put('/:id', function (req, res) {
  const { id } = req.params
  let index = dta.findIndex(elt => elt.id === id)
  if (index <= -1) {
    return res.json({ ...commonFailReply, msg: '修改失败!' })
  }

  dta[index] = { ...dta[index], ...req.body }
  return res.json({ ...commonSuccessReply, msg: '修改成功!' })
})

// 查
Router.get('/', function (req, res) {
  const { pageNum, pageSize, query } = req.query
  let start = (pageNum - 1) * pageSize
  let count = pageNum * pageSize
  // let filterArr = dta.filter(elt => elt.username.includes(query))
  let filterArr = dta.filter(elt => {
    return elt.username.includes(query)
  })

  let result = filterArr.slice(start, count)
  return res.json({
    ...commonSuccessReply,
    data: {
      userList: result,
      total: filterArr.length
    }
  })
})

// 修改用户状态
Router.put('/:id/state/:type', function (req, res) {
  const { id, type } = req.params
  let index = dta.findIndex(elt => elt.id === id)
  if (index <= -1) {
    return res.json({ ...commonFailReply, msg: '修改失败!' })
  }

  let pre = dta[index]
  dta[index] = { ...pre, status: JSON.parse(type) } // 这里的需要把传过来的字符串布尔值转换为布尔值

  return res.json({ ...commonSuccessReply, msg: '修改成功!' })
})

export default Router
