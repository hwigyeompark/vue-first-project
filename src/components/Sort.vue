<template>
  <div class="sort-btn-wrap">
    <button>오름차순</button>
    <button>내림차순</button>
  </div>
</template>

<script>
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
