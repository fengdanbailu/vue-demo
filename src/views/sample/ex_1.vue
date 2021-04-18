<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 16:51:23
 * @Description: file content
 * @FilePath: /vue-demo/src/views/sample/ex_1.vue
-->
<template>
  <div>
    <el-card class="interval">
      {{ message }}
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Sample',
  data() {
    return {
      message: '用户管理'
    }
  }
}
</script>
<style lang="scss" scoped>
  .interval {
    margin-bottom: 10px;
  }
</style>
