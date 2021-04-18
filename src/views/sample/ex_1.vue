<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-18 20:12:35
 * @Description: file content
 * @FilePath: /vue-demo/src/views/sample/ex_1.vue
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ title }}</span>
      </div>
      <el-row style="margin-bottom:10px;text-align:right">
        <el-button type="primary" @click="btnAdd">增加</el-button>
        <el-button type="primary" :disabled="multipleSelection.length!==1" @click="btnUpdate">修改</el-button>
        <el-button type="primary" :disabled="multipleSelection.length!==1" @click="btnDelete">删除</el-button>
        <el-button type="primary" :disabled="multipleSelection.length!==1" @click="btnView">查看</el-button>
      </el-row>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="序号"
          type="index"
          width="50"
        />
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
        />
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { userAdd, userUpdate, userDelete, userList, userDetail } from '@/api/user'
export default {
  name: 'Sample',
  data() {
    return {
      title: '用户管理',
      tableData: [{}],
      multipleSelection: []
    }
  },
  mounted() {
    this.getTableList()
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    async getTableList() {
      const condition = {}
      const res = await userList(condition)
      console.log(res)
    },
    async btnAdd() {
      const condition = {
        uuid: 'qazw-kdkslsd-kdsldk-42s4',
        name: 'gmchen',
        password: '123456'
      }
      const res = await userAdd(condition)
      console.log(res)
    },
    async btnUpdate() {
      const condition = {
        uuid: 'qazw-kdkslsd-kdsldk-42s4',
        name: 'guoming.chen',
        password: '12345678'
      }
      const res = await userUpdate(condition)
      console.log(res)
    },
    async btnDelete() {
      const condition = {
        uuid: 'qazw-kdkslsd-kdsldk-42s4'
      }
      const res = await userDelete(condition)
      console.log(res)
    },
    async btnView() {
      const condition = {
        uuid: 'qazw-kdkslsd-kdsldk-42s4'
      }
      const res = await userDetail(condition)
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
