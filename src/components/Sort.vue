<template>
  <div class="sort-btn-wrap">
    <button @click="getSortData">오름차순</button>
    <button @click="getSortData">내림차순</button>
  </div>
</template>

<script>
  import './Main'
  import axios from 'axios'
    export default {
      name: 'sort',
      methods: {
        getSortData: function (ord) {
          console.log('click the sort btn')
          axios.get(`http://comento.cafe24.com/request.php?page=1&ord=` + ord + `&category=${this.selectedCategory}`)
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
      &:hover{
        cursor: pointer;
      }
    }
  }
</style>
