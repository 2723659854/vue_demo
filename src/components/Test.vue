<template>
  <!-- 这里必须有根div盒子，否则报错 -->
  <div>
      <h1>我是test</h1>
      {{message}}
    <div v-on:click="say('test上的按钮')">父组件的按钮</div>
    <!--  这里设置ref属性，可以获取子组件的属性，这个ref就相当于id -->
    <demo :id="3" :content="'我是content'" ref="cao"></demo>

    <button v-on:click="requestApi">请求后端接口</button>
  </div>
</template>
<script>
/** 引入接口 */
import {getList} from "../api/http";
/** 引入要用到的另外一个组件 */
import Demo from "./Demo";

/** 导出组件 */
export default {
  /** 组件的名称 */
  name:'Test',
  /** 注册组件*/
  components:{Demo},
  /** 本组件的数据  */
  data () {
    return {
      message:"我是一个测试组件呢"
    }
  },

  /** 本组件自己的方法 */
  methods:{
    say(msg){
      console.log('test组件输出',msg);
      /** 获取子组件的属性 */
      console.log(this.$refs.cao.searchText)
      /** 调用子组件的方法 */
      this.$refs.cao.fuck()

    },
    /** 定义的另外一个方法 */
    fatherMethod(){
      console.log("我是test组件的fatherMethod")
    },
    async requestApi (){
      console.log("请求后端接口呢")
      let data = await getList({})
      console.log(data)
    }
  }
}
</script>
