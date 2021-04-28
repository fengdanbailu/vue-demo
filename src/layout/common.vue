<!--
 * @Author: gm.chen
 * @Date: 2020-07-13 20:56:22
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-28 07:37:57
 * @Description: file content
 * @FilePath: /vue-demo/src/layout/common.vue
-->
<template>
  <el-container class="wrap">
    <el-header height="60px">
      <Header />
    </el-header>
    <el-container>
      <el-aside class="sidebar-content">
        <Aside />
      </el-aside>
      <el-main class="main-content">
        <div class="main-router">
          <transition mode="out-in" name="fade">
            <router-view />
          </transition>
        </div>

        <Footer />
      </el-main>
      <el-aside v-show="false" class="sidebar-content" />
    </el-container>
  </el-container>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import Aside from './components/Aside'

export default {
  components: {
    Footer,
    Header,
    Aside
  }
}
</script>

<style lang="scss" scoped >
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .wrap {
    max-height: 100%;
    overflow: hidden;
    .el-header {
      padding: 0;
      background: #ffffff;
    }
    .main-content {
      padding: 10px;
      height: calc(100vh - 45px);
      min-width : 900px;
      overflow: auto;
      background : #f3f3f4;
      position: relative;
    }
    .main-router {
      min-height: 900px;
    }
    .sidebar-content {
      height: calc(100vh - 45px);
      overflow-x: hidden;
      // background:red;
      // width:200px;
    }
  }
</style>
