/*
 * @Author: gm.chen
 * @Date: 2020-06-24 20:35:42
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-08-18 20:13:03
 * @Description: file conte
 * @FilePath: /vue-demo/src/store/getters.js
 */
const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  display_name: state => state.user.display_name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  age: state => state.gmchen.age
}
export default getters
