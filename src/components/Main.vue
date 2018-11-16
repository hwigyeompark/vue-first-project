<template>
  <div id="main-wrap">
    <div class="header">
      <!--filter btn-->
      <Filter></Filter>
      <!--sort btn-->
      <Sort></Sort>
    </div>
    <div class="content">
      <BasicItem></BasicItem>
      <AdItem></AdItem>
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
