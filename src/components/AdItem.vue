<template>
  <div class="container">
    <div class="card-wrap" v-for="ad in ads">
      <div class="card ad-box-wrap" v-for="image in images">
        <div class="card-header">
          Sponsored
        </div>
        <div class="card-body">
          <div class="ad-box">
            <div class="ad-box-img">
              <img v-bind:src="image.img"/>
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
</template>

<script>
    export default {
        name: 'AdItem',
      data(){
          return{
            ads: [],
            images: [
              {img: 'http://comento.cafe24.com/public/images/test5.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test3.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test2.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test5.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test3.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test4.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test4.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test5.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test1.jpg'},
              {img: 'http://comento.cafe24.com/public/images/test2.jpg'}
            ]
          }
      },
      created(){
        this.getAdList()
      },
      methods: {
        getAdList: function () {
          this.$http.get(`http://comento.cafe24.com/ads.php?page=1&limit=10`)
            .then(response => {
              this.ads = response.data.list
            })
        }
      }
    }
</script>

<style lang="less" scoped>
  .ad-box-wrap{
    margin: 3%;
  }
.ad-box{
  display: flex;
}
  .ad-box-writing{
    padding: 15px;
  }
</style>
