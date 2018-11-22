<template>
  <div class="container">
    <div class="card writing-box-wrap" v-for="writing of preWritingList" @click="goToDetailPage">
      <div class="card-header">
        <ul>
          <li></li>
          <li>{{writing.no}}</li>
        </ul>
      </div>
      <div class="card-body">
        <ul>
          <li>{{writing.email}}</li>
          <li>|</li>
          <li>{{writing.updated_at}}</li>
        </ul>
      </div>
      <div class="card-body">
        <b>{{writing.title}}</b><br/><br/>
        {{writing.contents}}
      </div>
    </div>
  </div>
</template>

<script>
  import './Main'
  import './Category'
  import axios from 'axios'
  import {eventBus} from '../main';

  export default {
        name: 'BasicItem',
      data(){
          return{
            receivedWritingList: [],
            preWritingList: []
          }
      },
    created(){
      this.getPreCategoryList()
      eventBus.$on('select-category', sendWritingList => {
        this.receivedWritingList = sendWritingList
      })
    },
      methods: {
        goToDetailPage: function () {
          console.log('success')
          this.$router.push('/detailPage')
        },
        getPreCategoryList: function () {
          axios.get(`http://comento.cafe24.com/request.php?page=1&ord=asc&category=1`)
            .then(response => {
              this.preWritingList = response.data.list
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
    margin: 1%;
  }

  .writing-box-wrap{
    margin: 3%;
    &:hover{
      cursor: pointer;
    }
  }
</style>
