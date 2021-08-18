/*
 * @Author: gm.chen
 * @Date: 2021-08-18 19:59:44
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-08-18 22:07:19
 * @Description: file content
 * @FilePath: /vue-demo/src/store/modules/gmchen.js
 */

const state = {
  name: 'gmchen',
  age: 12,
  sex: '男',
  others: {},
  count: 0
}

export const mutations = {
  increment: (state) => {
    state.count = state.count + 1
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AGE: (state, age) => {
    state.age = age
  },
  SET_SEX: (state, sex) => {
    state.sex = sex
  },
  SET_OTHERS: (state, others) => {
    state.others = others
  }
}

export const actions = {
  // user login
  SetInfo({ commit, state, actions }, info) {
    const { name, age, sex } = info
    return new Promise((resolve, reject) => {
      commit('SET_NAME', name)
      commit('SET_AGE', age)
      commit('SET_SEX', sex)
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
