import Mock from 'mockjs'
import { transUrl } from '@/utils'

// 自定义拓展
Mock.Random.extend({
  mobile: function () {
    var phonePrefixs = ['132', '135', '189', '139', '188', '187']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  }
})

const data = Mock.mock({
  "data|106": [
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

export default [
  {
    url: '/users',
    type: 'get',
    response: (req, res) => {
      const { pageNum, pageSize, query } = transUrl(req.url)
      let start = (pageNum - 1) * pageSize
      let count = pageNum * pageSize
      let { data: dta } = data
      // let filterArr = dta.filter(elt => elt.username.includes(query))
      let filterArr = dta.filter(elt => {
        return elt.username.includes(query)
      })
      let result = filterArr.slice(start, count)
      return {
        userList: result,
        total: filterArr.length
      }
    },
  },
  {
    url: '/users',
    type: 'post',
    response: (req, res) => {
      const obj = JSON.parse(req.body)
      let { data: dta } = data
      dta.unshift({ ...obj.data, id: Mock.mock('@id') })
      return {
        data: {},
        code: 0,
        success: true,
        message: '新增成功',
      }
    }
  },
  {
    url: '/users',
    type: 'delete',
    response: (req, res) => {
      const obj = JSON.parse(req.body)
      let { data: dta } = data
      dta.unshift(obj.data)
      return {
        data: {},
        code: 0,
        success: true,
        message: '新增成功',
      }
    }
  }
]
