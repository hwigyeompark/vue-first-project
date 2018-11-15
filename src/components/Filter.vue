<template>
  <div class="filter-wrap">
    <button class="btn btn-primary filter-btn" data-toggle="modal" data-target="#filter-modal">필터</button>
    <div class="modal" id="filter-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">필터</h3>
          </div>
          <div class="modal-body">
            <div class="form-check">
              <input type="checkbox" value="category_1" name="category_1"/>카테고리1
              <input type="checkbox" value="category_2" name="category_2"/>카테고리2
              <input type="checkbox" value="category_3" name="category_3"/>카테고리3
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal">CLOSE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Filter'
    }
</script>

<style scoped>
</style>
