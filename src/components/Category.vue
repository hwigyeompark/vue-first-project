<template>
    <div class="filter-wrap">
      <button class="btn btn-primary filter-btn" data-toggle="modal" data-target="#filter-modal" @click="getCategories">
        필터
      </button>
      <!--filter modal-->
      <div class="modal fade" id="filter-modal">
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
</template>

<script>
  import {eventBus} from '../main'
  export default {
    name: 'Category',
    data() {
      return {
        categories: [],
        writingList: [],
        sendWritingList: [],
        selectedCategory: '',
        receivedSelectedSort: ''
      }
    },
    created(){
      eventBus.$on('click-sort', sendSelectedSort => {
        this.receivedSelectedSort = sendSelectedSort
        this.getCategoryList()
      })
    },
    methods: {
      getCategories: function () {
        this.$http.get(`http://comento.cafe24.com/category.php`)
          .then(response => {
            this.categories = response.data.list
          })
      },
      getCategoryList: function () {
        console.log('click save')
        this.$http.get(`http://comento.cafe24.com/request.php?page=1&ord=${this.receivedSelectedSort}&category=${this.selectedCategory}`)
          .then(response => {
            this.sendWritingList = response.data.list
            eventBus.$emit('select-category', this.sendWritingList)
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  .filter-btn{
    float: left;
  }
  .category-box-wrap{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
  }
  .category-box {
    float: left;
    margin: 1%;
  }
</style>
