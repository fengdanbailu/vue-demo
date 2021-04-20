/*
 * @Author: gm.chen
 * @Date: 2021-04-20 07:15:17
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-20 23:22:42
 * @Description: file content
 * @FilePath: /vue-demo/service/api/model/mysql/browserMark.js
 */
const mysql = require('../mysql')
const TTable = 'browsermark'
const TModel = {
  index: '',
  value: '',
  fields: ['uuid', 'name', 'puuid', 'type', 'link', 'createTime', 'updateBy', 'updateTime'],
  insertSQL(obj) {
    TModel.index = ''
    TModel.value = ''
    obj = filter(this.fields, obj)
    for (const key in obj) {
      TModel.index = `${TModel.index}${key},`
      if (typeof obj[key] !== 'string') {
        TModel.value = `${TModel.value}${obj[key]},`
      } else {
        TModel.value = `${TModel.value}'${obj[key]}',`
      }
    }
    TModel.index = TModel.index.substr(0, TModel.index.length - 1)
    TModel.value = TModel.value.substr(0, TModel.value.length - 1)

    return `INSERT INTO ${TTable} (${TModel.index}) VALUES(${TModel.value})`
  },
  selectSQL(condition) {
    TModel.val = ''
    for (const key in condition) {
      if (typeof condition[key] !== 'string') {
        TModel.val = `${TModel.val}${key}=${condition[key]},`
      } else {
        TModel.val = `${TModel.val}${key}='${condition[key]}',`
      }
    }
    if (TModel.val) {
      TModel.val = `WHERE ${TModel.val}`
    }
    TModel.val = TModel.val.substr(0, TModel.val.length - 1)
    return `SELECT * FROM ${TTable} ${TModel.val};`
  },
  deleteSQL(condition) {
    TModel.val = ''
    for (const key in condition) {
      if (typeof condition[key] !== 'string') {
        TModel.val = `${TModel.val}${key}=${condition[key]},`
      } else {
        TModel.val = `${TModel.val}${key}='${condition[key]}',`
      }
    }
    if (TModel.val) {
      TModel.val = `WHERE ${TModel.val}`
    }
    TModel.val = TModel.val.substr(0, TModel.val.length - 1)
    return `DELETE FROM ${TTable} ${TModel.val};` // 按需删除
  },
  updateSQL(condition, obj) { // 提交修改
    TModel.val = ''
    condition = filter(this.fields, condition)
    for (const key in condition) {
      if (typeof condition[key] !== 'string') {
        TModel.val = `${TModel.val}${key}=${condition[key]},`
      } else {
        TModel.val = `${TModel.val}${key}='${condition[key]}',`
      }
    }
    if (TModel.val) {
      TModel.val = `WHERE ${TModel.val}`
    }
    TModel.val = TModel.val.substr(0, TModel.val.length - 1)

    TModel.value = ''
    obj = filter(this.fields, obj)
    for (const key in obj) {
      if (typeof obj[key] !== 'string') {
        TModel.value = `${TModel.value}${key}=${obj[key]},`
      } else {
        TModel.value = `${TModel.value}${key}='${obj[key]}',`
      }
    }

    TModel.value = TModel.value.substr(0, TModel.value.length - 1)

    return `UPDATE ${TTable} SET ${TModel.value} ${TModel.val};`
  },
  insert(args, callback) {
    const sql = this.insertSQL(args)
    mysql.query(sql, callback)
  },
  update(condition, args, callback) {
    const sql = this.updateSQL(condition, args)
    mysql.query(sql, callback)
  },
  select(condition, callback) {
    const sql = this.selectSQL(condition)
    mysql.query(sql, callback)
  },
  delete(condition, callback) {
    const sql = this.deleteSQL(condition)
    mysql.query(sql, callback)
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
