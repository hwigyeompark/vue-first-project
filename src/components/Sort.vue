<template>
  <div class="sort-btn-wrap">
    <button @click="getSortData('asc')">오름차순</button>
    <button @click="getSortData('desc')">내림차순</button>
  </div>
</template>

<script>
  import {eventBus} from '../main'
    export default {
      name: 'sort',
      data(){
        return {
          sendSelectedSort: ''
        }
      },
      methods: {
        getSortData: function (ord) {
          this.sendSelectedSort = ord
          console.log(this.sendSelectedSort)
          eventBus.$emit('click-sort', this.sendSelectedSort)
        }
      }
  }
</script>

<style lang="less" scoped>
  .sort-btn-wrap{
    display: flex;
    float: right;
    button{
      width: 100px;
      float: right;
      border: none;
      background: transparent;
      margin: 1%;
      &:hover {
        cursor: pointer;
        color: red;
      }
      &:active{
        color: red;
      }
    }
  }
</style>
