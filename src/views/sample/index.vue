<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-13 17:24:57
 * @Description: file content
 * @FilePath: /vue-demo/src/views/sample/index.vue
-->

<template>
  <div>
    <el-card>
      {{ message }}
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Sample',
  data() {
    return {
      message: 'index'
    }
  }
}
</script>
