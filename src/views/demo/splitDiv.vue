<!--
 * @Author: gm.chen
 * @Date: 2021-04-27 19:27:12
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-28 23:32:01
 * @Description: file content
 * @FilePath: /vue-demo/src/views/demo/splitDiv.vue
-->
<template>
  <div>
    <split-div>
      <template v-slot:left>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>左侧</span>
          </div>
          <div>
            left content
          </div>

        </el-card>
      </template>
      <template v-slot:right>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>右侧</span>
          </div>
          right content
          <div>test</div>
          <p>ok么</p>
          <p>好像可以了</p>
          <p>好像可以了</p>
          <p>好像可以了</p>
          <p>好像可以了</p>
          <p>好像可以了</p>
          <div>test</div>
          <p>ok么</p>
          <p>好像可以了</p>
          <p>好像可以了</p>
          <p>好像可以了</p>
          <p>好像可以了</p>
          <p>好像可以了</p>
        </el-card>
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
