/*
 * @Author: gm.chen
 * @Date: 2020-11-10 23:31:10
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 16:38:18
 * @Description: file content
 * @FilePath: /vue-demo/src/api/user.js
 */
import request from '@/utils/request'
const rootPath = `/user`
export function userAdd(data) {
  return request({
    url: `${rootPath}/add`,
    method: 'post',
    data
  })
}

export function userUpdate(data) {
  return request({
    url: `${rootPath}/update`,
    method: 'put',
    data
  })
}

export function userDelete(data) {
  return request({
    url: `${rootPath}/delete`,
    method: 'delete',
    params: data
  })
}

export function userDetail(data) {
  return request({
    url: `${rootPath}/detail`,
    method: 'get',
    params: data
  })
}

export function userList(data) {
  return request({
    url: `${rootPath}/list`,
    method: 'post',
    params: data
  })
}

export function login(data) {
  return request({
    url: `${rootPath}/login`,
    method: 'post',
    data
  })
}

export function logout(data) {
  return request({
    url: `${rootPath}/logout`,
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: `${rootPath}/getInfo`,
    method: 'post',
    data
  })
}
