import Mock from 'mockjs'
import getUser from './login'
import getUserList from './user'

const mocks = [
  ...getUser,
  ...getUserList
]
// for mock server
// const responseFake = (url, type, respond) => {
//   return {
//     url: new RegExp(`${url}`),
//     type: type || 'get',
//     response(req, res) {
//       res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
//     }
//   }
// }

mocks.map(route => Mock.mock(new RegExp(`${route.url}`), route.type, route.response))
