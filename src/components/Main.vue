<template>
  <div id="main-wrap">
      <!--header-->
    <Header></Header>
    <div class="content">
      <!--writing list-->
      <BasicItem></BasicItem>
      <!--ad list-->
      <AdItem></AdItem>
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
      selectedSort: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  #main-wrap {
    width: 100%;
    overflow: hidden;
    margin-top: 4%;
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
