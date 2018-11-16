<template>
  <div class="sort-btn-wrap">
    <button @click="onClickSort">오름차순</button>
    <button>내림차순</button>
  </div>
</template>

<script>
    export default {
      name: 'Sort',
      methods: {
        onClickSort: function () {
          axios.getPar
        }
      }
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
