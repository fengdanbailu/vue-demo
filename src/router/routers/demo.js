/*
 * @Author: gm.chen
 * @Date: 2020-06-24 17:18:37
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-27 19:44:42
 * @Description: file content
 * @FilePath: /vue-demo/src/router/routers/demo.js
 */
import CommonLayout from '@/layout/common'

export default {
  path: '/demo',
  name: '展示',
  redirect: '/demo/split',
  component: CommonLayout,
  children: [
    {
      path: 'split',
      name: 'Split组件',
      component: () => import('@/views/demo/splitDiv'),
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: 'table',
      name: 'Table组件',
      component: () => import('@/views/demo/table'),
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: 'threeJs',
      name: '3D场景',
      component: () => import('@/views/demo/threejs'),
      beforeEnter: (to, from, next) => {
        next()
      }
    }
  ]
}

