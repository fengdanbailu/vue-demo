<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-02-15 22:40:25
 * @Description: file content
 * @FilePath: /vue-demo/src/views/sample/ex_2.vue
-->
<template>
  <el-card>
    {{ message }}
  </el-card>
</template>
<script>
export default {
  name: 'Sample',
  data() {
    return {
      message: 'ex_2'
    }
  }
}
</script>
