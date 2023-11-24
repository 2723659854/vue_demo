import Vue from 'vue'
import Router from 'vue-router'

/** 加载组件 */
import HelloWorld from "../components/HelloWorld";
import Test from "../components/Test";

Vue.use(Router)
/** 定义路由 */
export default new Router({
  routes: [
    {
      /** 访问方式：http://127.0.0.1:8080/#/ */
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      /** 访问方式：http://127.0.0.1:8080/#/test */
      path: '/test',
      name: 'i am a test components',
      component:Test
    },
  ]
})
