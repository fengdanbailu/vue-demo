/*
 * @Author: gm.chen
 * @Date: 2020-06-24 20:35:42
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-08-18 20:07:55
 * @Description: file content
 * @FilePath: /vue-demo/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const myPlugin = store => {
  // 当 store 初始化后调用
  console.log('1-------')
  console.log(store.state)
  console.log(store.mutation)
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    console.log('2-------')
    console.log(state)
    console.log(mutation)
  })
}

const loggerParam = {
  collapsed: false, // 自动展开记录的 mutation
  filter(mutation, stateBefore, stateAfter) {
    // 若 mutation 需要被记录，就让它返回 true 即可
    // 顺便，`mutation` 是个 { type, payload } 对象
    return mutation.type !== 'aBlocklistedMutation'
  },
  actionFilter(action, state) {
    // 和 `filter` 一样，但是是针对 action 的
    // `action` 的格式是 `{ type, payload }`
    return action.type !== 'aBlocklistedAction'
  },
  transformer(state) {
    // 在开始记录之前转换状态
    // 例如，只返回指定的子树
    return state.subTree
  },
  mutationTransformer(mutation) {
    // mutation 按照 { type, payload } 格式记录
    // 我们可以按任意方式格式化
    return mutation.type
  },
  actionTransformer(action) {
    // 和 `mutationTransformer` 一样，但是是针对 action 的
    return action.type
  },
  logActions: true, // 记录 action 日志
  logMutations: true, // 记录 mutation 日志
  logger: console // 自定义 console 实现，默认为 `console`
}

const store = new Vuex.Store({
  modules,
  getters,
  plugins: [myPlugin, createLogger(loggerParam)]
})

export default store
