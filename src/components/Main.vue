<template>
  <div id="main-wrap">
    <div class="header">
      <Filter></Filter>
      <Sort></Sort>
    </div>
    <div class="content">
      <BasicItem></BasicItem>
      <SponsorItem></SponsorItem>
    </div>
  </div>
</template>

<script>
    import Filter from "./Filter";
    import Sort from "./Sort";
    import BasicItem from "./BasicItem";
    import SponsorItem from "./SponsorItem";
    export default {
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
</style>
