<!--
 * @Author: gm.chen
 * @Date: 2021-04-27 19:27:12
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-27 23:01:08
 * @Description: file content
 * @FilePath: /vue-demo/src/views/demo/splitDiv.vue
-->
<template>
  <div>
    <div>splitDiv</div>
    <split-div>
      <template v-slot:left>
        <div>left part</div>
      </template>
      <template v-slot:right>
        <div>right part</div>
        <hr>
        hello
      </template>
    </split-div>
  </div>

</template>
<script>
import splitDiv from '@/components/gmSplitDiv'
export default {
  name: 'SplitDivDemo',
  components: { splitDiv },
  data() {
    return {}
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>

</style>
