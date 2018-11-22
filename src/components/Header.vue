<template>
  <div class="header">
    <div class="header-wrap">
      <Category></Category>
      <Sort></Sort>
    </div>
  </div>
</template>

<script>
    import Category from './Category'
    import Sort from './Sort'
    export default {
        name: 'header',
      components: {Sort, Category}
    }
</script>

<style scoped>
  .header {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
  }
  .header-wrap{
    display: flex;
  }
</style>
