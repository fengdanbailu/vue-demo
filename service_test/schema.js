/*
 * @Author: gm.chen
 * @Date: 2021-05-01 22:06:48
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-01 22:16:50
 * @Description: file content
 * @FilePath: /vue-demo/service_test/Schema.js
 */

const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt } = require('graphql')

// 我们要用的模拟数据
const data = require('./data/data.json')

const User = new GraphQLObjectType({
  name: 'User',
  description: 'User对象',
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: User,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: function(_, args) {
        return data[args.id]
      }
    }
  }
})

const Schema = new GraphQLSchema({
  query: Query
})
