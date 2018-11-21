<template>
  <div>
    <Main></Main>
    <router-view></router-view>
  </div>
</template>

<script>
  import Main from './components/Main'
  export default {
    name: 'app',
    components: Main
  }
</script>

<style>
  @import "assets/less/common.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
