/*
 * @Author: gm.chen
 * @Date: 2020-06-24 20:35:42
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-13 22:13:51
 * @Description: file content
 * @FilePath: /vue-demo/src/settings.js
 */
module.exports = {
  title: 'vue-demo',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
