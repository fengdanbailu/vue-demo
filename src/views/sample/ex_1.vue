<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-06-24 17:10:29
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
      message: 'hello vue'
    }
  }
}
</script>
