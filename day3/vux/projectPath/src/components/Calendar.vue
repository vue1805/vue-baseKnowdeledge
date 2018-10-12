<template>
<group>
    <cell title="Total" value="￥1024"></cell>
    <cell-form-preview :list="list"></cell-form-preview>
  </group>
  </template>

<script>
import { CellFormPreview, Group, Cell } from 'vux'

export default {
  components: {
    CellFormPreview,
    Group,
    Cell
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }]
    }
  }
}
</script>

<style lang="less" scoped>

</style>