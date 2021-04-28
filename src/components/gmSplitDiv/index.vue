<!--
 * @Author: gm.chen
 * @Date: 2021-04-27 19:30:04
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-28 23:30:59
 * @Description: file content
 * @FilePath: /vue-demo/src/components/gmSplitDiv/index.vue
-->
<template>
  <div class="wrap">
    <div ref="letfDom" class="lf" style="width: 280px;">
      <div class="lf-content">
        <slot name="left" />
      </div>
      <div ref="moveDom" class="touch-div">
        <span />
        <span />
      </div>
    </div>
    <div class="rt">
      <div>
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GmSplitDiv',
  data() {
    return {
      letfDom: null,
      clientStartX: 0
    }
  },
  mounted() {
    this.letfDom = this.$refs.letfDom
    const moveDom = this.$refs.moveDom

    moveDom.onmousedown = e => {
      this.clientStartX = e.clientX
      e.preventDefault()

      document.onmousemove = e => {
        this.moveHandle(e.clientX, this.letfDom)
      }

      document.onmouseup = e => {
        document.onmouseup = null
        document.onmousemove = null
      }
    }
  },
  methods: {
    moveHandle(nowClientX, letfDom) {
      const computedX = nowClientX - this.clientStartX
      const leftBoxWidth = parseInt(letfDom.style.width)
      let changeWidth = leftBoxWidth + computedX

      if (changeWidth < 200) {
        changeWidth = 200
      }

      if (changeWidth > 600) {
        changeWidth = 600
      }

      letfDom.style.width = changeWidth + 'px'

      this.clientStartX = nowClientX
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
    display:flex;
    height:calc(100vh-400px);
    position:relative;
    .lf {
        position: relative;
        height:100%;
        .lf-content {
            width:100%;
            height:100%;
            position:relative;
            overflow:auto;
        };
        .touch-div {
            z-index:20;
            position: absolute;
            top: 0;
            height: 100%;
            left: 100%;
            width: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: col-resize;
        }
        span {
            height:15px;
            width: 2px;
            background: #bbb;
            margin:2px;
        }
    }
    .rt{
        padding-left:15px;
        overflow:auto;
        flex:1;
        height:100%;
        width:100%;
        position: relative;
    }

}

</style>
