import axios from 'axios'

const MyPlugin = {}

MyPlugin.install = function (Vue, options) {
  // 4. 添加实例方法
  const baseOptions = {
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: 'http://localhost:9000',
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 20 * 1000, // 超时,时长 ms
    cache: false // 禁用缓存
  }

  axios.defaults.baseURL = 'http://localhost:9000'
  let AUTH_TOKEN = localStorage.getItem('access_token')
  axios.defaults.headers.common.Authorization = AUTH_TOKEN
  // const request = axios.create(baseOptions)
  // request.interceptors.request.use(
  //   config => {
  //     debugger
  //     return config
  //   },
  //   error => {
  //     // do something with request error
  //     console.log(error) // for debug
  //     return Promise.reject(error)
  //   }
  // )

  // response interceptor
  // request.interceptors.response.use(
  //   response => {
  //     const res = response.data
  //     return res
  //   },
  //   error => {
  //     console.log('err' + error) // for debug
  //     const { response } = error
  //     const errData = (response && response.data) || {}
  //     return Promise.reject(errData || error)
  //   }
  // )

  Vue.prototype.$http = axios
}

export default MyPlugin
