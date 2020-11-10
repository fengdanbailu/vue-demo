/*
 * @Author: gm.chen
 * @Date: 2020-06-24 11:29:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-11-10 23:42:38
 * @Description: file content
 * @FilePath: /vue-demo/src/main.js
 */

import Vue from 'vue'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
// 生产环境的提示信息，默认关闭更好
Vue.config.productionTip = false

var vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
