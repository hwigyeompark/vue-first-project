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
    <!--show join popup-->
    <div class="modal fade" id="join-induce-modal-wrap">
      <div class="modal-dialog">
        <div class="modal-content join-induce-modal">
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
                <button class="facebook-btn">페이스북 계정으로 회원가입</button>
                <button class="google-btn">구글 계정으로 회원가입</button>
                <button class="naver-btn">네이버 계정으로 회원가입</button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-dismiss="modal" @click="showJoinFooterPopup">나중에 하기</button>
          </div>
        </div>
      </div>
    </div>
    <!--show join footer popup-->
    <div class="modal fade" id="join-induce-modal-footer-wrap">
      <div class="modal-dialog">
        <div class="modal-content join-induce-footer-modal">
          <div class="modal-body">
            <div class="join-induce-footer-box">
              <div class="join-induce-footer-ment">
                <p>지금 가입하면 꿈꾸던 기업에 재직 중인 현직자와 <span class="red-span">익명</span>으로 대화할 수 있습니다.</p>
              </div>
              <div class="join-btn-footer-wrap">
                <button class="sns-join-btn">SNS계정으로 빠른 회원가입</button>
                <p>또는</p>
                <button class="login-btn">로그인</button>
              </div>
            </div>
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
    created(){
      this.showJoinPopup()
      eventBus.$on('get-detail', sendDetailList => {
        this.receivedDetailList = sendDetailList
      })
    },
    data(){
      return{
        receivedDetailList: [],
        selectedDetailNum: ''
      }
    },
    methods: {
      showJoinPopup: function () {
        console.log('success show join popup')
        $('#join-induce-modal-wrap').appendTo('body').modal('show')
      },
      showJoinFooterPopup: function () {
        $('#join-induce-modal-footer-wrap').appendTo('body').modal('show')
      }
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
    margin: 2% 0 2% 0;
    padding: 5% 3% 2% 3%;
    & p {
      text-align: center;
      font-size: 1.1rem;
      vertical-align: center;
    }
  }
  .red-span{
    color: red;
  }

  .join-btn-wrap {
    .join-induce-box;
    & button {
      width: 100%;
      margin-top: 2.5%;
      padding: 10px;
      color: #ffffff;
      border: none;
      &:hover{
        cursor: pointer;
      }
    }
    & .facebook-btn {
      background-color: #3b5998;
    }
    & .google-btn {
      background-color: #ea4335;
    }
    & .naver-btn {
      background-color: #00bd39;
    }
  }

  .join-btn-footer-wrap{
    display: flex;
    justify-content: center;
    & button{
      padding: 3%;
      border: none;
      border: 1px solid #555555;
      margin: 1%;
    }
    & .sns-join-btn{
      background-color: #00c854;
      color: #ffffff;
    }
    & .login-btn{
      background-color: #ffffff;
      color: #000000;
    }
  }
  @media screen and (max-width: 480px) {
    .join-induce-modal{
    }
  }
</style>
