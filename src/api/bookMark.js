/*
 * @Author: gm.chen
 * @Date: 2019-08-21 20:33:23
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 16:24:43
 * @Description: file content
 * @FilePath: /vue-demo/src/api/index.js
 */

import request from '@/utils/request'
const rootPath = `/bookMark`
export function bookMarkAdd(data) {
  return request({
    url: `${rootPath}/add`,
    method: 'post',
    data
  })
}

export function bookMarkUpdate(data) {
  return request({
    url: `${rootPath}/update`,
    method: 'put',
    data
  })
}

export function bookMarkDelete(data) {
  return request({
    url: `${rootPath}/delete`,
    method: 'delete',
    params: data
  })
}

export function bookMarkDetail(data) {
  return request({
    url: `${rootPath}/detail`,
    method: 'get',
    params: data
  })
}

export function bookMarkList(data) {
  return request({
    url: `${rootPath}/list`,
    method: 'post',
    params: data
  })
}
