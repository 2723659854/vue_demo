<template>
  <div>
    <!-- 给组件添加一个点击事件 -->
    <div v-on:click="fuck">子组件的按钮</div>
    <input v-model="searchText" ref="searchText"/>
    <div v-on:click="useFatherFunction">子组件调用父组件的方法</div>
  </div>
</template>

<script>
export default {
  /** 组件的名称 */
  name : "Demo",
  /** 本组件包含的属性 */
  props:{
    id:Number,
    content:String
  },
  /** 定义本组件提供的数据 */
  data (){
    return {
      /** 拼装数据 */
      message:this.id + this.content,
      searchText:""
    }
  },

  /** 本组件提供的方法 */
  methods:{
    fuck(){
      console.log('当前输入值是',this.searchText);
    },
    useFatherFunction(){
      /** 调用父组件的方法 使用$parent */
      this.$parent.fatherMethod()
      /** 调用父组件的属性 */
      console.log(this.$parent.message)
    }
  }
}
</script>
