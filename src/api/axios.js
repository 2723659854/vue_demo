import axios from "axios";
//使用自定义配置的文件发送请求
const instance = axios.create({
  baseURL: '',
  timeout: 8000,
  headers:{

  }
})
//添加请求拦截器
instance.interceptors.request.use(function (config){
  return config
},function (error){
  return  Promise.reject(error)
})

//添加响应拦截器
instance.interceptors.response.use(function (response){
  instance
  if(response.status === 200){
    return response
  }else{
    console.error('请求错误')
    console.error(response)
  }
  return response
},function (error){
  return Promise.reject(error)
})

export default instance
