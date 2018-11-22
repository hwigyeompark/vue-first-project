<template>
  <div class="detail-wrap">
    <Header></Header>
    <div class="container">
      <div class="detail-box-wrap" v-for="detail of receivedDetailList">
        <div class="form-group">
          <h5><b>글 번호</b></h5>
          <div>{{detail.no}}</div>
        </div>
        <div class="form-group">
          <h5><b>제목</b></h5>
          <div>{{detail.title}}</div>
        </div>
        <div class="form-group">
          <h5><b>이메일</b></h5>
          <div>{{detail.email}}</div>
        </div>
        <div class="form-group">
          <h5><b>작성일</b></h5>
          <div>{{detail.updated_at}}</div>
        </div>
        <div class="form-group">
          <h5><b>내용</b></h5>
          <div>{{detail.contents}}</div>
        </div>
        <div class="form-group">
          <h5><b>댓글</b></h5>
          <div>{{detail.replies}}</div>
        </div>
      </div>
    </div>
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
  import Header from './Header'
  import {eventBus} from '../main'

  export default {
    name: 'detailPage',
    components: {Header},
    data(){
      return{
        receivedDetailList: [],
        selectedDetailNum: ''
      }
    },
    created(){
      eventBus.$on('get-detail', sendDetailList => {
        this.receivedDetailList = sendDetailList
      })
    }
  }
</script>

<style lang="less" scoped>
  .detail-wrap{
    margin: 4%;
  }
  .detail-box-wrap{
    .detail-wrap
  }
  .form-group{
    border-bottom: 1px solid #e0e0e0;
  }
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
