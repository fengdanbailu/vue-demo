<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-14 10:33:38
 * @Description: file content
 * @FilePath: /vue-demo/src/views/sample/ex_1.vue
-->
<template>
  <div>
    <el-card class="interval">
      {{ message }}
    </el-card>
    <el-card class="interval">
      {{ message2 }}
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Sample',
  data() {
    return {
      message: 'ex_1-1',
      message2: 'ex_1-2'
    }
  }
}
</script>
<style lang="scss" scoped>
  .interval {
    margin-bottom: 10px;
  }
</style>
