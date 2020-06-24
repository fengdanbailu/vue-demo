/*
 * @Author: gm.chen
 * @Date: 2019-08-21 20:33:23
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-06-24 17:39:53
 * @Description: file content
 * @FilePath: /vue-demo/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
import sample from './sample'



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', redirect: '/404', hidden: true },
    { path: '/404', component: () => import('@/views/404.vue'), hidden: true },
    {
      path: '/',
      // component: Layout,
      redirect: '/sample/index',
      children: [
        {
          path: 'sample',
          component: () => import('@/views/sample/index'),
          name: 'Sample'
        }
      ]
    },
    sample
  ]
})
