import axios from "axios"
import NProgress from 'nprogress'

// axios请求拦截器
axios.interceptors.request.use(
  (config) => {
    NProgress.start() // 设置加载进度条(开始..)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// axios响应拦截器
axios.interceptors.response.use(
  function (response) {
    NProgress.done() // 设置加载进度条(结束..)
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

NProgress.configure({ showSpinner: false })