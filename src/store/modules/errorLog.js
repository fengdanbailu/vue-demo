/*
 * @Author: gm.chen
 * @Date: 2020-06-24 20:35:42
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-14 09:43:25
 * @Description: file content
 * @FilePath: /vue-demo/src/store/modules/errorLog.js
 */
const state = {
  logs: []
}

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  },
  CLEAR_ERROR_LOG: (state) => {
    state.logs.splice(0)
  }
}

const actions = {
  addErrorLog({ commit }, log) {
    commit('ADD_ERROR_LOG', log)
  },
  clearErrorLog({ commit }) {
    commit('CLEAR_ERROR_LOG')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
