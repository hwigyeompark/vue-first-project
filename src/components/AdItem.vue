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
  width: 100%;
  display: flex;
  overflow: hidden;
}
.ad-box-img{
  width: 60%;
  overflow: hidden;
}
  .ad-box-writing{
    width: 40%;
    padding: 15px;
  }
  @media screen and (max-width: 480px) {
    .ad-box{
      display: flex;
      flex-wrap: wrap;
    }
    .ad-box-img{
      margin: 0 auto;
      width: 100%;
    }
    .ad-box-writing{
      .ad-box-img
    }
  }
</style>
