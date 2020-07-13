/*
 * @Author: gm.chen
 * @Date: 2019-08-21 20:33:23
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-13 21:09:20
 * @Description: file content
 * @FilePath: /vue-demo/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import routes from './routers'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
