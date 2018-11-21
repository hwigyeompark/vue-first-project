<template>
  <div id="main-wrap">
    <div class="header">
      <!--filter btn-->
      <Header>
      </Header>
<!--      <div class="filter-wrap">
        <button class="btn btn-primary filter-btn" data-toggle="modal" data-target="#filter-modal"
                @click="getCategories">필터
        </button>
        &lt;!&ndash;filter modal&ndash;&gt;
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
      </div>-->
      <!--sort btn-->
<!--        <div class="sort-btn-wrap">
          <button @click="getSortData">오름차순</button>
          <button @click="getSortData">내림차순</button>
        </div>-->
    </div>
    <div class="content">
      <!--writing list-->
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
      <!--ad list-->
      <div class="container">
        <div class="card ad-box-wrap" v-for="ad of ads">
          <div class="card-header">
            Sponsor
          </div>
          <div class="card-body" >
            <div class="ad-box">
              <div class="ad-box-img">
                <img v-bind:src="{url}"/>
              </div>
              <div class="ad-box-writing">
                <h4>{{ad.title}}</h4>
                <p>{{ad.contents}}</p>
                </div>
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
import BasicItem from './BasicItem'
import AdItem from './AdItem'
import Header from './Header'

export default {
  name: 'main',
  components: {Header, AdItem, BasicItem},
  data () {
    return {
      ads: [],
      writingList: [],
      selectedSort: '',
      adImages: []
    }
  },
  created() {
    this.getAdList()
  },
  methods: {
    goToDetailPage: function () {
      console.log("success")
      this.$router.push('/detailPage')
    },
    getAdList: function () {
      axios.get(`http://comento.cafe24.com/ads.php?page=1&limit=10`)
        .then(response => {
          this.ads = response.data.list
        })
    },
    getAdImage: function () {
    }
  }
}
</script>

<style lang="less" scoped>
  #main-wrap {
    width: 100%;
    overflow: hidden;
    margin-top: 4%;
  }
  .header {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
  }
  .filter-btn{
    float: left;
  }
  .sort-btn-wrap{
    display: flex;
    button{
      width: 100px;
      float: right;
      border: none;
      background: transparent;
      margin: 1%;
    }
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

  .writing-box-wrap{
    margin: 3%;
    &:hover{
      cursor: pointer;
    }
  }
  .ad-box-wrap{
    margin: 3%;
  }
  .ad-box{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    & img{
      width: 350px;
      height: 300px;
    }
  }
  .ad-box-img{
    width: 40%;
  }
  .ad-box-writing{
    width: 60%;
    & p{
      word-break: break-all;
    }
  }
</style>
