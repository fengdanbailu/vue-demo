<!--
 * @Author: gm.chen
 * @Date: 2020-07-31 09:55:31
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-11 23:25:14
 * @Description: file content
 * @FilePath: /vue-demo/src/layout/components/Header/index.vue
-->
<script>
import { mapGetters } from 'vuex'

const menuItems = [
  {
    title: 'Sample展示',
    router: '/'
  },
  {
    title: 'D3语法',
    router: '/'
  },
  {
    title: 'AdminElement',
    router: '/'
  },
  {
    title: 'JavaScript',
    router: '/'
  },
  {
    title: '第三方组件',
    children: [
      {
        title: 'jsonschema',
        router: '/'
      },
      {
        title: 'jquery',
        router: '/'
      },
      {
        title: 'JavaScript',
        router: '/'
      }
    ]
  },
  {
    title: '关于我',
    router: '/'
  }
]

export default {
  name: 'Header',
  data() {
    return {
      menuItems
    }
  },
  computed: {
    ...mapGetters(['navTopActiveIndex'])
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$store.dispatch('setNavTopActiveIndex', key)
    }
  },
  render(h) {
    function renderItem(itemData, index) {
      let titleComponent = itemData.title
      if (itemData.router) {
        titleComponent = (<router-link to={itemData.router} style={{ 'display': 'block' }}>{ itemData.title }</router-link>)
      }
      if (itemData.children && (itemData.children.length > 0)) {
        return (
          <el-submenu index={index} key={index}>
            <template slot='title'>
              {titleComponent}
            </template>
            {
              itemData.children && itemData.children.map((subitem, subindex) => renderItem(subitem, index + '-' + subindex))
            }
          </el-submenu>
        )
      }

      return (
        <el-menu-item index={index} key={index}>
          {titleComponent}
        </el-menu-item>
      )
    }
    const { menuItems, navTopActiveIndex, handleSelect } = this

    return (
      <el-menu
        ref='Header'
        class='nav-menu-top'
        mode='horizontal'
        active-text-color='#409EFF'
        unique-opened={true}
        defaultActive={navTopActiveIndex}
        on-select={handleSelect}
      >{ menuItems.map((itemData, index) => renderItem(itemData, index.toString())) }</el-menu>
    )
  }
}
</script>
