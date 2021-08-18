<!--
 * @Author: gm.chen
 * @Date: 2021-04-27 19:27:12
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-08-18 20:30:09
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
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'SplitDivDemo',
  components: { splitDiv },
  data() {
    return {}
  },
  computed: {
    // ...mapState('gmchen', { 'others': store => store.others, 'age': store => store.age })
    ...mapState('gmchen', ['others', 'age'])

  },
  mounted() {
    console.log('splitDiv---------------start')
    this.$store.commit('gmchen/SET_OTHERS', { a: 2, b: 3, c: 'hello', d: { f: 'gg', m: 'jj' }})
    console.log('splitDiv--------------- log start')
    console.log(this.age, this.others)
    console.log(this.$store.getters.age)
    console.log(this.$store.state.gmchen.name)
    console.log('splitDiv---------------log end')
    this.$store.dispatch('gmchen/SetInfo', { name: '陈国明', sex: '男', age: 30 })
    console.log('splitDiv---------------end')
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>

</style>
