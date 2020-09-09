import Mock from 'mockjs'

const data = Mock.mock({
  id: '@id',
  collectionTime: '2019-07-16',
  uuid: '@guid()'
},
)

export default [
  {
    url: '/login',
    type: 'post',
    response: (req, res) => {
      const { userName, pwd } = JSON.parse(req.body)
      if (userName !== 'yangwuc' || pwd !== "123") {
        return {
          data: {},
          code: 1,
          success: false,
          message: '用户名和密码不匹配'
        }
      }

      return {
        data,
        code: 0,
        success: true,
        message: '登录成功',
        token: 'asdfgbnhjhyg@#$%^&*YUIsdfghj'
      }
    }
  }
]
