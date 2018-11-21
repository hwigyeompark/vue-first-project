<template>
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
</template>

<script>
  import axios from 'axios'
  import {eventBus} from '../main'

  export default {
    name: 'filter',
    data() {
      return{
        categories: [],
        selectedCategory: ''
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
        axios.get(`http://comento.cafe24.com/request.php?page=1&ord=asc&category=${this.selectedCategory}`)
          .then(response => {
            eventBus.writingList = response.data.list
          })
      },
    }
  }
</script>

<style scoped>
</style>
