/*
 * @Author: gm.chen
 * @Date: 2020-07-23 16:33:38
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-31 17:17:24
 * @Description: file content
 * @FilePath: /vue-demo/src/store/modules/app.js
 */
import Cookies from 'js-cookie'
import { getTreePath, saveTreePath, getNavTopActiveIndex, saveNavTopActiveIndex } from '@/utils/location'
import Vue from 'vue'

const state = {
  sideInfo: {
    showSidebar: false,
    hasTree: false,
    hasMenu: false
  },
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    // opened: false,
    withoutAnimation: false
  },
  device: 'desktop',
  selectedTreePath: getTreePath() ? getTreePath().split('__') : [],
  switchMenuOrTree: true,
  treeVisibility: false,
  navMenuTopItems: [],
  navTopActiveIndex: getNavTopActiveIndex()
}

const mutations = {
  SET_NAV_TOP_ACTIVE_INDEX: (state, navTopActiveIndex) => {
    state.navTopActiveIndex = navTopActiveIndex
    saveNavTopActiveIndex(navTopActiveIndex)
  },
  SET_SIDE_INFO: (state, sideInfo) => {
    state.sideInfo = sideInfo
  },
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  CHANGE_TREE_PATH: (state, path) => {
    state.selectedTreePath = path.split('__')
    saveTreePath(path)
  },
  SWITCH_MENU_TREE(state, val) {
    state.switchMenuOrTree = val
  },
  SET_TREE_VISIBILITY(state, val) {
    state.treeVisibility = val
  },
  UPDATE_WEB_HEADER: (state, header) => {
    // utree header
    if (header.utree) {
      const itemsTmp = state.navMenuTopItems
      const utreeItem = [header.utree]
      state.navMenuTopItems = utreeItem.concat(itemsTmp)
    }

    //   debugger
    state.navMenuTopItems.map((item, index) => {
      if (item.name && header.hasOwnProperty(item.name) && header[item.name].children) {
        Vue.set(state.navMenuTopItems[index], 'children', header[item.name].children)
      }
    })
  }
}

const actions = {
  setSideInfo({ commit }, sideInfo) {
    commit('SET_SIDE_INFO', sideInfo)
  },
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  changeTreePath({ commit }, options) {
    if (options.path) {
      commit('CHANGE_TREE_PATH', options.path || '')
    }
  },
  clearTreePath({ commit }) {
    commit('CLEAR_TREE_PATH')
  },
  updateWebHeader({ commit }, header) {
    commit('UPDATE_WEB_HEADER', header)
  },
  setTreeVisibility({ commit }, val) {
    commit('SET_TREE_VISIBILITY', val)
  },
  setNavTopActiveIndex({ commit }, val) {
    commit('SET_NAV_TOP_ACTIVE_INDEX', val)
  }
}

export default {
  state,
  mutations,
  actions
}
