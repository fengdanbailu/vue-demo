/*
 * @Author: gm.chen
 * @Date: 2020-07-13 20:16:28
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-13 20:31:55
 * @Description: file content
 * @FilePath: /vue-demo/src/router/routers/index.js
 */

import sample from './sample'

export default [
  { path: '*', redirect: '/404', hidden: true },
  { path: '/404', component: () => import('@/views/404.vue'), hidden: true },
  { path: '/', redirect: '/sample/index', hidden: true },
  sample
]
