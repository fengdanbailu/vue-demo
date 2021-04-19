/*
 * @Author: gm.chen
 * @Date: 2021-04-20 07:15:17
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-20 07:31:47
 * @Description: file content
 * @FilePath: /vue-demo/service/api/model/mysql/browserMark.js
 */
const mysql = require('../mysql')
const TTable = 'browserMark'
const TModel = {
  index: '',
  value: '',
  list: `SELECT * from ${TTable};`, // 列表查询
  insert(args) {
    TModel.index = ''
    TModel.value = ''
    args = filter(['uuid', 'name', 'puuid', 'type', 'link', 'createTime', 'updateBy', 'updateTime'], args)
    for (const key in args) {
      TModel.index = `${TModel.index}${key},`
      const re = /^[0-9]+.?[0-9]*/
      if (re.test(args[key])) {
        TModel.value = `${TModel.value}${args[key]},`
      } else {
        TModel.value = `${TModel.value}'${args[key]}',`
      }
    }
    TModel.index = TModel.index.substr(0, TModel.index.length - 1)
    TModel.value = TModel.value.substr(0, TModel.value.length - 1)

    return `INSERT INTO ${TTable} (${TModel.index}) VALUES(${TModel.value})`
  }, // 按需增加
  select(index, value) {
    return `SELECT * from ${TTable} where ${index}=${value};` // 按需查询
  },
  delete(index, value) {
    return `DELETE from ${TTable} where ${index}=${value};` // 按需删除
  },
  update(index, args) { // 提交修改
    if (index in args) {
      TModel.value = ''
      args = filter(['uuid', 'name', 'puuid', 'type', 'link', 'createTime', 'updateBy', 'updateTime'], args)
      for (const key in args) {
        const re = /^[0-9]+.?[0-9]*/
        if (re.test(args[key])) {
          TModel.value = `${TModel.value}${key}=${args[key]},`
        } else {
          TModel.value = `${TModel.value}${key}='${args[key]}',`
        }
      }
      TModel.value = TModel.value.substr(0, TModel.value.length - 1)
      return `UPDATE ${TTable} SET ${TModel.value} WHERE ${index}=${args[index]};`
    }
  }
}
// 参数过滤
function filter(list, obj) {
  const newObj = {}
  list.forEach(every => {
    if (every in obj) {
      newObj[every] = obj[every]
    }
  })
  return newObj
}

module.exports = TModel
