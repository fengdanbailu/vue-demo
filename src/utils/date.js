/*
 * @Author: gm.chen
 * @Date: 2020-07-23 16:33:38
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-31 10:56:09
 * @Description: file content
 * @FilePath: /vue-demo/src/utils/date.js
 */ 
/*
 * @Author: gm.chen
 * @Date: 2020-07-23 16:33:38
 * @LastEditors: gm.chen
 * @LastEditTime: 2020-07-31 10:53:31
 * @Description: file content
 * @FilePath: /vue-demo/src/utils/date.js
 */
function genDouble(num) {
  return num < 10 ? `0${num}` : `${num}`
}

export function getDate(date = new Date()) {
  date = new Date(date)

  if (Number.isNaN(date)) return ''

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}-${genDouble(month)}-${genDouble(day)} ${getTime(date)}`
}

export function getTime(time) {
  time = new Date(time)
  const hours = genDouble(time.getHours())
  const minutes = genDouble(time.getMinutes())
  const second = genDouble(time.getSeconds())

  return `${hours}:${minutes}:${second}`
}

export function isToday(time) {
  time = new Date(time)

  const diff = time.valueOf() - new Date(new Date().toDateString()).valueOf()

  return diff < 1000 * 60 * 60 * 24 && diff > 0
}

export function isTomorrow(time) {
  time = new Date(time)

  const diff = time.valueOf() - new Date(new Date().toDateString()).valueOf()

  return 24 * 60 * 60 * 1000 < diff && diff < 24 * 60 * 60 * 1000 * 2
}

export function isYesterday(time) {
  time = new Date(time)

  const diff = new Date(new Date().toDateString()).valueOf() - new Date(time).valueOf()

  return diff > 0 && diff < 24 * 60 * 60 * 1000
}
