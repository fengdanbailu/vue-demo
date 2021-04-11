<!--
 * @Author: gm.chen
 * @Date: 2020-07-31 09:30:05
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-02-15 22:39:44
 * @Description: file content
 * @FilePath: /vue-demo/src/layout/components/Footer/index.vue
-->
<template>
  <div class="footer">
    <div class="copyright">
      Copyright © 2019-{{ (new Date()).getFullYear() }}. Powered By gm.chen. All rights reserved.
    </div>
  </div>
</template>

<style lang="scss">
  .footer {
    padding: 16px 0 5px;
    font-size: 12px;
    clear: both;
    .copyright {
      text-align: center;
      opacity: 0.8;
      color: #000;
    }
  }
</style>
