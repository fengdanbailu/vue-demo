<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-19 07:08:33
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
          prop="name"
          label="账号"
          width="180"
        />
        <el-table-column
          prop="password"
          label="密码"
          width="180"
        />
        <el-table-column
          prop="createTime"
          label="创建时间"
        />
        <el-table-column
          prop="updateTime"
          label="修改时间"
        />
        <el-table-column
          prop="updateBy"
          label="操作人"
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
      tableData: [],
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
      this.tableData = res
    },
    async btnAdd() {
      const condition = {
        uuid: 'uuid-' + Math.ceil(Math.random() * 1000000),
        name: 'gmchen',
        password: '123456'
      }
      const res = await userAdd(condition)
      this.getTableList()
    },
    async btnUpdate() {
      const detail = this.multipleSelection
      if (detail.length === 1) {
        const condition = {
          uuid: detail[0].uuid,
          name: 'guoming.chen',
          password: Math.ceil(Math.random() * 1000000)
        }
        const res = await userUpdate(condition)
        this.getTableList()
      } else {
        this.$notice({
          type: 'warning',
          message: '请选择一条记录'
        })
      }
    },
    async btnDelete() {
      const detail = this.multipleSelection
      if (detail.length === 1) {
        const condition = {
          uuid: detail[0].uuid
        }
        const res = await userDelete(condition)
        this.getTableList()
      } else {
        this.$notice({
          type: 'warning',
          message: '请选择一条记录'
        })
      }
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
