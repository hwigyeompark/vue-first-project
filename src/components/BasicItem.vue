<template>
  <div class="container">
    <div class="card writing-box-wrap" v-for="writing of writingList" @click="goToDetailPage">
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

/*  eventBus.$emit('getCategoryList', axios.get(`http://comento.cafe24.com/request.php?page=1&ord=asc&category=${this.selectedCategory}`)
    .then(response => {
      this.writingList = response.data.list
    })
  )*/
  export default {
        name: 'BasicItem',
      data(){
          return{
            writingList: [],
            selectedCategory: ''
          }
      },
    created(){
      this.getCategoryList()
    },
      methods: {
        goToDetailPage: function () {
          console.log('success')
          this.$router.push('/detailPage')
        },
        getCategoryList: function () {
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
    margin: 1%;
  }

  .writing-box-wrap{
    margin: 3%;
    &:hover{
      cursor: pointer;
    }
  }
</style>
