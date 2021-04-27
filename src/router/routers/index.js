/*
 * @Author: gm.chen
 * @Date: 2020-07-13 20:16:28
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-27 19:42:37
 * @Description: file content
 * @FilePath: /vue-demo/src/router/routers/index.js
 */

import sample from './sample'
import demo from './demo'

export default [
  { path: '*', redirect: '/404', hidden: true },
  { path: '/404', component: () => import('@/views/404.vue'), hidden: true },
  { path: '/', redirect: '/sample/index', hidden: true },
  { path: '/index', redirect: '/sample/index', hidden: true },
  { path: '/index.html', redirect: '/sample/index', hidden: true },
  { path: '/ex_1', redirect: '/sample/ex_1', hidden: true },
  { path: '/ex_2', redirect: '/sample/ex_2', hidden: true },
  sample,
  demo
]
