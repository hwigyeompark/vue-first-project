<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Sponsor
      </div>
      <div class="card-body">
        <div class="sponsor-box">
          <img />
          <div>
            <h4>제목제목</h4>
            <p>내용내용</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SponsorItem"
    }
</script>

<style lang="less" scoped>
.sponsor-box{
  display: flex;
}
</style>
