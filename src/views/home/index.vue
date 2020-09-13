<template>
  <el-container class="container">
    <Header></Header>
    <el-container class="containerBody">
      <Nav :menusList="menusList"></Nav>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from './header/Header.vue'
import Nav from './nav/Nav'

export default {
  data() {
    return {
      menusList: [],
    }
  },
  beforeCreate() {
    const access_token = localStorage.getItem('access_token')
    if (!access_token) {
      this.$router.push('/login')
    }
  },
  created() {
    this.getMenusList()
  },
  components: {
    Header,
    Nav,
  },
  methods: {
    async getMenusList() {
      try {
        const { data } = await this.$http.get('/menus')
        this.menusList = data
      } catch (error) {}
    },
  },
}
</script>

<style scoped lang='less'>
* {
  padding: 0;
  margin: 0;
}

.container {
  height: 100%;
  padding: 1px;
  background-color: #eee;
  flex-direction: column;

  .el-main {
    background-color: #e9eef3;
    padding: 15px;
  }
}
</style>
