import Vue from 'vue'
import axios from 'axios'
// import * as fundebug from 'fundebug-javascript'
// import fundebugVue from 'fundebug-vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Http from '@/plugins/http.js'
import '@/plugins/elements.js' // 引入element-ui
// 引入bug检查
// fundebug.apikey = '95046f792de7bfcaf8af38bfe3eaec9b2d8cdd51046f7e97e2ff1b68d0cf1942'
// fundebugVue(fundebug, Vue)
import './mock/index.js'
// 引入 接口插件axios
// Vue.use(Http)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
