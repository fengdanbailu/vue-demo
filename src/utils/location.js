/*
 * @Author: gm.chen
 * @Date: 2020-07-31 10:55:05
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-31 10:55:53
 * @Description: file content
 * @FilePath: /vue-demo/src/utils/location.js
 */

const serviceTreePath = 'selected_node_id'
const navTopActiveIndex = 'nav_top_active_index'

export function saveTreePath(path) {
  sessionStorage.setItem(serviceTreePath, path)
}

export function getTreePath() {
  return sessionStorage.getItem(serviceTreePath) || ''
}

export function saveNavTopActiveIndex(index) {
  sessionStorage.setItem(navTopActiveIndex, index)
}

export function getNavTopActiveIndex() {
  return sessionStorage.getItem(navTopActiveIndex) || '0'
}
