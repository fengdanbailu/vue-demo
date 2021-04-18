/*
 * @Author: gm.chen
 * @Date: 2020-06-24 11:29:20
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 17:48:00
 * @Description: file content
 * @FilePath: /vue-demo/src/main.js
 */

import Vue from 'vue'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'es6-promise/auto'

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})
// 生产环境的提示信息，默认关闭更好
Vue.config.productionTip = false

var vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
