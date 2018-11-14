<template>
    <div class="filter">
      <button class="btn btn-primary filter-btn" data-toggle="modal" data-target="#filter-modal">필터</button>

      <div class="modal" id="filter-modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">필터 종류</h1>
            </div>
            <div class="modal-body">

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
        name: "Filter"
    }
</script>

<style scoped>
</style>
