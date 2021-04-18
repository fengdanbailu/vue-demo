<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 16:51:43
 * @Description: file content
 * @FilePath: /vue-demo/src/views/sample/ex_3.vue
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
      message: 'mysql书签管理'
    }
  }
}
</script>
