import axios from 'axios'

const MyPlugin = {}

MyPlugin.install = function (Vue) {
  let AUTH_TOKEN = localStorage.getItem('access_token')
  // 4. 添加实例方法
  const baseOptions = {
    baseURL: process.env.VUE_APP_BASE_API,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 20 * 1000, // 超时,时长 ms
    cache: false, // 禁用缓存
    headers: {
      Authorization: AUTH_TOKEN
    }
  }

  const request = axios.create(baseOptions)

  // request interceptor
  request.interceptors.request.use(
    config => {
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  // response interceptor
  request.interceptors.response.use(
    response => {
      const { data } = response
      return data
    },
    error => {
      console.log('err' + error) // for debug
      const { response } = error
      const errData = (response && response.data) || {}
      return Promise.reject(errData || error)
    }
  )
  // axios.defaults.baseURL = process.env.VUE_APP_BASE_API
  // axios.defaults.headers.common.Authorization = AUTH_TOKEN
  // Vue.prototype.$http = axios
  Vue.prototype.$http = request
}

export default MyPlugin
