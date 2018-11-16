<template>
<div class="container">
  <div class="card" v-for="writing of writingList">
    <div class="card-header">
      <ul>
        <li>카테고리명</li>
        <li>{{writing.no}}</li>
      </ul>
    </div>
    <div class="card-body">
      <ul>
        <li>{{writing.email}}</li>
        <li>|</li>
        <li>{{writing.updated_at}}</li>
      </ul>
      <b>{{writing.title}}</b>
    </div>
    <div class="card-body">{{writing.content}}</div>
  </div>
</div>
</template>

<script>
  import './Main'
  import axios from 'axios'
    export default {
        name: 'BasicItem',
      data(){
          return{
            writingList: []
          }
      },
      methods: {
          getCategoryList: function () {
            alert('afd')
          axios.get(`http://comento.cafe24.com/request.php?page=1&ord=asc&category=1`)
            .then(response => {
              this.writingList = response.data.list
            })
        }
      }
    }
</script>

<style lang="less" scoped>
  .card-header> ul li{
    float: left;
    &:last-child{
      float: right;
    }
  }
  .card-body>ul li{
    float: left;
  }
</style>
