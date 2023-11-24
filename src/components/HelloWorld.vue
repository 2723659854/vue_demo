<!-- 第一层是使用的template标签 这个相当于官方的一个组件示例 -->
<template>
  <!-- 下面的内容就按照正常的html写就可以了  -->
  <div class="hello">
    <img src="../assets/logo.png">
    <!-- 参数绑定   -->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" > Core Docs </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" >
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" >
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank" >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank" >
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank" >
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank" >
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>
<!--下面是定义组件-->
<script>
/** 使用导出export方法 */
export default {
  /** 组件的名称 */
  name: 'HelloWorld',
  /** 绑定的数据 这里使用的是匿名函数的方式返回数据 ,感觉这里是一个data方法 */
  data () {
    /** 必须使用return方法返回数据 */
    return {
      /** 内部使用map格式定义数据 */
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 添加scoped 属性限制这些css属性仅仅作用于本组件 -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
