<template>
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
</template>

<script>
  import './Main'
  import axios from 'axios'
    export default {
        name: 'AdItem',
      data(){
          return{
            ads: [],
            adImages: []
          }
      },
      created(){
        this.getAdList()
      },
      methods: {
        getAdList: function () {
          axios.get(`http://comento.cafe24.com/ads.php?page=1&limit=10`)
            .then(response => {
              this.ads = response.data.list
            })
        },
      }
    }
</script>

<style lang="less" scoped>
.ad-box{
  display: flex;
  flex-wrap: wrap;
  & img{
    width: 350px;
    height: 300px;
  }
}
</style>
