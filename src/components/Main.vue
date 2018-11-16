<template>
  <div id="main-wrap">
    <div class="header">
      <!--filter btn-->
      <div class="filter-wrap">
        <button class="btn btn-primary filter-btn" data-toggle="modal" data-target="#filter-modal"
                @click="getCategories">필터
        </button>
        <!--filter modal-->
        <div class="modal" id="filter-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title">필터</h3>
                <button type="button" class="btn btn-danger" data-dismiss="modal">X</button>
              </div>
              <div class="modal-body category-box-wrap">
                <div class="category-box" v-for="category of categories">
                  <input v-model="selectedCategory" type="radio" :value="category.no" name="category"/> {{category.name}}
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="getCategoryList">저장</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--sort btn-->
      <Sort></Sort>
    </div>
    <div class="content">
      <!--writing list-->
      <div class="container">
        <div class="card" v-for="writing of writingList" @click="goToDetailPage">
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
      <!--ad list-->
      <div class="container">
        <div class="card">
          <div class="card-header">
            Sponsor
          </div>
          <div class="card-body" >
            <div class="ad-box" v-for="ad of ads">
              <img src="../assets/images/test.jpg"/>
              <div>
                <h4>{{ad.title}}</h4>
                <p>{{ad.contents}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Filter from './Filter'
import Sort from './Sort'
import BasicItem from './BasicItem'
import AdItem from './AdItem'

export default {
  name: 'Main',
  components: {AdItem, BasicItem, Filter, Sort},
  data () {
    return {
      categories: [],
      writingList: [],
      selectedCategory: '',
      selectedSort: ''
    }
  },
  methods: {
    getCategories: function () {
      axios.get(`http://comento.cafe24.com/category.php`)
        .then(response => {
          this.categories = response.data.list
        })
    },
    getCategoryList: function () {
      axios.get(`http://comento.cafe24.com/request.php?page=1&ord=&category=${this.selectedCategory}`)
        .then(response => {
          this.writingList = response.data.list
        })
    },
    goToDetailPage: function () {
      console.log('d')
      this.$router.push('/detailPage')
    }
  }
}
</script>

<style lang="less" scoped>
  #main-wrap {
    width: 100%;
    overflow: hidden;
  }

  .header {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
  }
  .category-box-wrap{
    .header;
  }
  .category-box {
    float: left;
    margin: 1%;
  }

  .card-header > ul li {
    float: left;
    &:last-child {
      float: right;
    }
  }

  .card-body > ul li {
    float: left;
    margin: 1%;
  }
</style>
