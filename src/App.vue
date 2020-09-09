<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
* {
  text-decoration: none;
  list-style: none;
}

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
  width: 1240px;
  margin: 0 auto;
  background-color: #eee;
}
</style>
