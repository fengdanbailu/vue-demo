/*
 * @Author: gm.chen
 * @Date: 2020-06-24 17:18:37
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-06-24 17:40:05
 * @Description: file content
 * @FilePath: /vue-demo/src/router/sample.js
 */

import Layout from '@/layout'

export default {
  path: '/sample',
  name: '例子',
  redirect: '/sample/index',
//   component: Layout,
  children: [
    {
      path: 'index',
      name: '主页',
      component: () => import('@/views/sample')
    },
    {
      path: 'ex_1',
      name: ' 例子 1',
      component: () => import('@/views/sample/ex_1')
    },
    {
      path: 'ex_2',
      name: '例子 2',
      component: () => import('@/views/sample/ex_1')
    }
  ]
}

