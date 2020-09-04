import Mock from 'mockjs'
import getUser from './user'

const mocks = [
  ...getUser
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

mocks.map(route => Mock.mock(route.url, route.type, route.response))
