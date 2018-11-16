<template>
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
</template>

<script>
  import axios from 'axios'
  import './Main'
    export default {
        name: 'AdItem',
      methods: {
          getAdList: function () {
            axios.get(`http://comento.cafe24.com/ads.php?page=1&limit=10`)
              .then(response => {
                this.ads = response.data.list
              })
          }
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
