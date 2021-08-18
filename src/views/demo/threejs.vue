<!--
 * @Author: gm.chen
 * @Date: 2021-04-27 19:27:12
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-08-18 18:56:56
 * @Description: file content
 * @FilePath: /vue-demo/src/views/demo/threejs.vue
-->
<template>
  <div>
    <div>threejs</div>
    <demo-three />
  </div>
</template>

<script>

import demoThree from '@/components/gmThree'
export default {
  name: 'Threejs',
  components: {
    demoThree
  },
  data() {
    return {}
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>

</style>
