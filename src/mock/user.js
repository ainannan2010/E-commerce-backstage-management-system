import Mock from 'mockjs'
import { transUrl } from '@/utils'

// 自定义拓展
Mock.Random.extend({
  phone: function () {
    var phonePrefixs = ['132', '135', '189', '139', '188', '187']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  }
})

const data = Mock.mock({
  "data|106": [
    {
      name: '@cname',
      email: '@email',
      'create_time|564577990837-2564577990837': 0,
      phone: '@phone',
      status: '@boolean'
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
      let result = dta.slice(start, count)
      return {
        userList: result,
        total: dta.length
      }
    }
  }
]
