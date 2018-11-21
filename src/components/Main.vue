<template>
  <div id="main-wrap">
    <div class="header">
      <!--filter btn-->
      <Header></Header>
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
      <BasicItem></BasicItem>
      <!--ad list-->
      <AdItem></AdItem>
      </div>
    </div>
  </div>
</template>

<script>
import BasicItem from './BasicItem'
import AdItem from './AdItem'
import Header from './Header'

export default {
  name: 'Main',
  components: {Header, AdItem, BasicItem},
  data () {
    return {
      ads: [],
      writingList: [],
      selectedSort: '',
      adImages: []
    }
  },
  methods: {
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
