<!--
 * @Author: gm.chen
 * @Date: 2020-06-24 15:45:52
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-19 23:19:40
 * @Description: file content
 * @FilePath: /vue-demo/src/views/sample/ex_2.vue
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
          prop="uuid"
          label="ID"
          width="180"
        />
        <el-table-column
          prop="name"
          label="名称"
          width="180"
        />
        <el-table-column
          prop="puuid"
          label="PID"
          width="180"
        />
        <el-table-column
          prop="type"
          label="类型"
        />
        <el-table-column
          prop="link"
          label="链接"
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
import { bookMarkAdd, bookMarkUpdate, bookMarkDelete, bookMarkList, bookMarkDetail } from '@/api/bookMark'
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
      const res = await bookMarkList(condition)
      this.tableData = res
    },
    async btnAdd() {
      const condition = {
        uuid: 'uuid-' + Math.ceil(Math.random() * 100000000),
        name: 'gmchen',
        puuid: '',
        type: '技术类',
        link: 'http://www.baidu.com'
      }
      const res = await bookMarkAdd(condition)
      this.getTableList()
    },
    async btnUpdate() {
      const detail = this.multipleSelection
      if (detail.length === 1) {
        const condition = {
          uuid: detail[0].uuid,
          name: 'gmchen',
          puuid: '',
          type: '技术类',
          link: 'http://www.google.com'
        }
        const res = await bookMarkUpdate(condition)
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
        const res = await bookMarkDelete(condition)
        this.getTableList()
      } else {
        this.$notice({
          type: 'warning',
          message: '请选择一条记录'
        })
      }
    },
    async btnView() {
      const detail = this.multipleSelection
      if (detail.length === 1) {
        const condition = {
          uuid: detail[0].uuid
        }
        const res = await bookMarkDetail(condition)
      } else {
        this.$notice({
          type: 'warning',
          message: '请选择一条记录'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
