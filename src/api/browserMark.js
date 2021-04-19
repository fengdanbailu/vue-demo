/*
 * @Author: gm.chen
 * @Date: 2019-08-21 20:33:23
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-20 06:56:35
 * @Description: file content
 * @FilePath: /vue-demo/src/api/browserMark.js
 */

import request from '@/utils/request'
const rootPath = `/browserMark`
export function browserMarkAdd(data) {
  return request({
    url: `${rootPath}/add`,
    method: 'post',
    data
  })
}

export function browserMarkUpdate(data) {
  return request({
    url: `${rootPath}/update`,
    method: 'put',
    data
  })
}

export function browserMarkDelete(data) {
  return request({
    url: `${rootPath}/delete`,
    method: 'delete',
    params: data
  })
}

export function browserMarkDetail(data) {
  return request({
    url: `${rootPath}/detail`,
    method: 'get',
    params: data
  })
}

export function browserMarkList(data) {
  return request({
    url: `${rootPath}/list`,
    method: 'post',
    params: data
  })
}
