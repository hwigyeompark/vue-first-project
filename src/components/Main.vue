<template>
  <div id="main-wrap">
    <div class="header">
      <div class="filter-wrap">
        <button class="btn btn-primary filter-btn" data-toggle="modal" data-target="#filter-modal" @click="getCategories">필터</button>
        <div class="modal" id="filter-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title">필터</h3>
              </div>
              <div class="modal-body">
                <div class="category-box" v-for="category of categories">
                  <input type="checkbox" value="category" name="category"/>{{category.name}}
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal">CLOSE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sort></Sort>
    </div>
    <div class="content">
      <BasicItem></BasicItem>
      <SponsorItem></SponsorItem>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    import Filter from "./Filter";
    import Sort from "./Sort";
    import BasicItem from "./BasicItem";
    import SponsorItem from "./SponsorItem";
    export default {
      data(){
        return{
          categories: []
        }
      },
      methods: {
        getCategories: function() {
          axios.get(`http://comento.cafe24.com/category.php`)
            .then(response => {
              this.categories = response.data.list
            })
        }
      },
      name: 'Main',
      components: {SponsorItem, BasicItem, Filter, Sort}
    }
</script>

<style lang="less" scoped>
  #main-wrap{
    width: 100%;
    overflow: hidden;
  }
  .header{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
  }
  .category-box{
    float: left;
  }
</style>
