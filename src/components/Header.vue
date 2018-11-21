<template>
    <div class="header-wrap">
      <Category></Category>
      <Sort></Sort>
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
  .header-wrap{
    display: flex;
  }
</style>
