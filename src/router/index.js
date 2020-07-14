/*
 * @Author: gm.chen
 * @Date: 2019-08-21 20:33:23
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-14 15:20:19
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    // back to header
    return { x: 0, y: 0 }
  }
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
