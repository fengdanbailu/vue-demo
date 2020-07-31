/*
 * @Author: gm.chen
 * @Date: 2020-06-24 20:35:42
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-31 17:26:06
 * @Description: file conte
 * @FilePath: /vue-demo/src/store/getters.js
 */
const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  navTopActiveIndex: state => state.app.navTopActiveIndex,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  display_name: state => state.user.display_name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
