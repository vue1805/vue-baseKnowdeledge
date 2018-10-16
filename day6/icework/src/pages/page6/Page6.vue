<template>
  <!-- d2-container 文档 http://app.d3collection.cn/d2-admin-doc/lastest/zh/sys-components/container.html -->
  <d2-container class="page-page6">
    <template slot="header">page6</template>
    <d2-crud/>
    <template slot="footer">自动生成 1 个组件</template>
  </d2-container>
</template>

<script>
// mixin
import mixinPage from '@/mixins/page'
// 组件
import D2Crud from './components/D2Crud'
// 请删除下面代码中你不需要的部分
export default {
  name: 'page6',
  components: {
    D2Crud
  },
  // 组合
  mixins: [
    'mixinPage'
  ],
  // 数据
  data () {
    return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 生命周期钩子
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  // 事件处理方法
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './Page6.scss';
</style>
