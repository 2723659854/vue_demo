'use strict'
/** 使用强制类型 */
module.exports = {
  // 其他配置
    // 代理配置
    devServer: {
      proxy: {
        '/api': { // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
          target: 'http://127.0.0.1:8000', // 目标地址 --> 服务器地址
          ws: true,  // 允许websocket代理
          secure: false,
          changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
          // 如果这里没有进行路径重写，当你访问http://localhost:80/api/login/,实际上访问的就是https://172.20.9.153:8085/api/login/
          pathRewrite: { // 重写代理路径
            // 就是把路径中的api都替换为空的字符串
            '^/api': '', // 因为服务端地址里面是没有api字段的，api只是为了区别需要代理的路径，如果服务端有api字段则不需要重新
          }
        }
      }

}
}
