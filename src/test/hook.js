/* eslint-disable no-undef */
/*
 * @Author: gm.chen
 * @Date: 2021-08-18 22:11:22
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-08-18 22:33:47
 * @Description: file content
 * @FilePath: /vue-demo/src/test/hook.js
 */
import { expect } from 'chai'
import { add } from './help/add.js'
import { mutations, actions } from '../store/modules/gmchen.js'

// 解构 `mutations`
const { increment } = mutations
const { SetInfo } = actions

describe('带hooks的测试', function() {
  before(function() {
    // 在本区块的所有测试用例之前执行
    console.log('\t start ---------------------------')
  })

  after(function() {
    // 在本区块的所有测试用例之后执行
    console.log('\t end ---------------------------')
  })

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
    console.log('\tit start ---------------------------')
  })

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
    console.log('\tit end ---------------------------')
  })

  // test cases
  describe('加法函数', function() {
    it('1 + 3 = 4', function() {
      expect(add(1, 3)).to.be.equal(4)
    })
  })
  describe('其他测试', function() {
    it('正确测试', () => {
      expect(2).to.equal(2)
    })

    it('错误测试', () => {
      expect(1).to.equal(2)
    })

    it('VUEX测试', () => {
      // 模拟状态
      const state = { count: 0 }
      // 应用 mutation
      increment(state)
      // 断言结果
      expect(state.count).to.equal(1)
    })
  })
})

describe('不带hooks的测试', () => {
  it('vuex测试', () => {
    // 模拟状态
    const state = { count: 1 }
    // 应用 mutation
    increment(state)
    // 断言结果
    expect(state.count).to.equal(2)
  })
})
