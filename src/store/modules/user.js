/*
 * @Author: gm.chen
 * @Date: 2020-06-24 10:09:30
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-06-24 15:43:11
 * @Description: file content
 * @FilePath: /vue-demo/src/store/modules/user.js
 */

import router, { resetRouter } from '@/router'

const state = {
  token: 'token',
  name: 'name',
  avatar: 'avatar',
  introduction: 'introduction',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return 'login'
  },

  // get user info
  getInfo({ commit, state }) {
    return 'getInfo'
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return 'logout'
  },

  // remove token
  resetToken({ commit }) {
    return 'resetToken'
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'
    commit('SET_TOKEN', token)
    const { roles } = await dispatch('getInfo')
    resetRouter()
    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)
    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
