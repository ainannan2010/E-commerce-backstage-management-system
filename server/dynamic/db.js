// 引入mockjs文件
const Mock = require('mockjs')
module.exports = function () {
  const data = Mock.mock({
    'userList|2': [
      {
        'id|+1': 0,
        title: '@cword(8, 20)',
        desc: '@cparagraph.substr(0, 40)',
        tag: '@cword(2, 6)',
        views: '@integer(100, 5000)',
        images: '@image("250x250", "png", "@cname()")'
      }
    ], // 定义接口名称为news
    type: {
      a: 'a',
      b: 'b'
    }
  })
  // 动态生成10条新闻数据
  return data
}
