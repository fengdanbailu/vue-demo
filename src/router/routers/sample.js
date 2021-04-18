/*
 * @Author: gm.chen
 * @Date: 2020-06-24 17:18:37
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 16:50:57
 * @Description: file content
 * @FilePath: /vue-demo/src/router/routers/sample.js
 */
import CommonLayout from '@/layout/common'

export default {
  path: '/sample',
  name: '例子',
  redirect: '/sample/index',
  component: CommonLayout,
  children: [
    {
      path: 'index',
      name: '主页',
      component: () => import('@/views/sample'),
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: 'ex_1',
      name: ' 例子 1',
      component: () => import('@/views/sample/ex_1'),
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: 'ex_2',
      name: '例子 2',
      component: () => import('@/views/sample/ex_2'),
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: 'ex_3',
      name: '例子 3',
      component: () => import('@/views/sample/ex_3'),
      beforeEnter: (to, from, next) => {
        next()
      }
    }
  ]
}

