<template>
  <div id="main-wrap">
    <Filter></Filter>
    <Sort></Sort>
  </div>
</template>

<script>
    import Filter from "./Filter";
    import Sort from "./Sort";
    export default {
      name: 'Main',
      components: {Filter, Sort}
    }
</script>

<style scoped>

</style>
