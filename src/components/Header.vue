<template>
    <div>
      <Filter></Filter>
      <Sort></Sort>
    </div>
</template>

<script>
    import Filter from './Filter';
    import Sort from './Sort';
    export default {
        name: 'header',
      components: {Sort, Filter}
    }
</script>

<style scoped>

</style>
