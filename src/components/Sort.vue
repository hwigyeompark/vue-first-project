<template>
  <div class="sort-btn-wrap">
    <button v-model="selectedSort" :value="writing.ord">오름차순</button>
    <button v-model="selectedSort" :value="writing.ord">내림차순</button>
  </div>
</template>

<script>
  import './Main'
    export default {
      name: 'Sort'
    }
</script>

<style lang="less" scoped>
  .sort-btn-wrap{
    display: flex;
    float: right;
    button{
      border: none;
      background: transparent;
    }
  }
</style>
