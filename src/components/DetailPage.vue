<template>
  <div>
    <h1>Welcom detail page</h1>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">제목</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">이메일</label>
        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">작성일</label>
        <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">내용</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
    <!--popup-->
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">회원가입</h3>
          </div>
          <div class="modal-body">
            <div class="join-induce-box">
              <div class="join-induce-ment">
                <p>지금 가입하면 꿈꾸던 기업에 재직 중인 현직자와</p>
                <p><span>익명</span>으로 대화할 수 있습니다.</p>
              </div>
              <div class="join-btn-wrap">
                <button>페이스북 계정으로 회원가입</button>
                <button>구글 계정으로 회원가입</button>
                <button>네이버 계정으로 회원가입</button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-dismiss="modal">나중에 하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './Main'

  export default {
    name: 'DetailPage'
  }
</script>

<style lang="less" scoped>
  .join-induce-box {
    width: 100%;
    margin: 0 auto;
  }

  .join-induce-ment {
    .join-induce-box;
    border: 1px solid #333333;
    padding: 3%;
    & p {
      text-align: center;
      font-size: 1.2rem;
    }
    & span {
      color: red;
    }
  }

  .join-btn-wrap {
    .join-induce-box;
    & button {
      width: 100%;
      padding: 10px;
      color: #ffffff;
    }
    & button:nth-child(1) {
      background-color: #3b5998;
    }
    & button:nth-child(2) {
      background-color: #ea4335;
    }
    & button:nth-child(3) {
      background-color: #00bd39;
    }
  }
</style>
