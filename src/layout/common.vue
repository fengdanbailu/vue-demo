<!--
 * @Author: gm.chen
 * @Date: 2020-07-13 20:56:22
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-14 13:47:00
 * @Description: file content
 * @FilePath: /vue-demo/src/layout/common.vue
-->
<template>
  <el-container class="wrap">
    <el-header height="50px">
      &nbsp;
    </el-header>
    <el-container>
      <el-aside class="sidebar-content" />
      <el-main class="main-content">
        <transition mode="out-in" name="fade">
          <router-view />
        </transition>
      </el-main>
      <el-aside v-show="false" class="sidebar-content" />
    </el-container>
  </el-container>
</template>

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
    .sidebar-content {
      height: calc(100vh - 45px);
      overflow-x: hidden;
    }
  }
</style>
