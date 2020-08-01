<template>
  <div id="login">
    <div class="loginBackGroundBig"></div>
    <div class="loginBackGroundSmall"></div>
    <div class="header">
      <span class="routeBackBtn">×</span>
    </div>
    <div class="title">国图管家</div>
    <form class="formWrap">
      <div>
        <label for="userName" class="label">账号</label>
        <input id="userName" placeholder="营业执照注册号/手机号" />
      </div>
      <div>
        <label for="passWord" class="label">密码</label>
        <input id="passWord" placeholder="请输入密码" />
      </div>
    </form>
    <div class="submitWrap">
      <button class="submitBtn active" @click="loginBtnClick">查询并绑定</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    routeBack() {
      this.$router.go(-1);
    },
    loginBtnClick() {
      this.$router.push("/data");
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
#login {
  .loginBackGroundBig {
    position: absolute;
    right: 0;
    top: 0;
    width: 101px;
    height: 230px;
    background: linear-gradient(to bottom, #d4ddff 0%, #ffffff 100%);
  }
  .loginBackGroundSmall {
    position: absolute;
    right: 101px;
    top: 0;
    width: 101px;
    height: 150px;
    background: linear-gradient(to bottom, #e4ebff 0, #ffffff 100%);
  }
  .header {
    width: 100%;
    padding-top: 30px;
    .routeBackBtn {
      margin-left: 15px;
      font-size: 30px;
    }
  }
  .title {
    width: 304px;
    margin: 0 auto;
    margin-top: 45px;
    font-size: 24px;
    color: #000;
  }
  .formWrap {
    width: 304px;
    margin: 100px auto 0;
    color: #000;
    div {
      margin-bottom: 20px;
    }
    .label {
      font-size: 18px;
    }
    input {
      width: 100%;
      margin-top: 10px;
      border: none;
      border-bottom: 1px solid #eee;
      line-height: 40px;
      font-size: 13px;
    }
  }
  .submitWrap {
    width: 289px;
    margin: 50px auto 0;
    .submitBtn {
      border: none;
      width: 100%;
      height: 44px;
      background: rgba(242, 244, 248, 1);
      border-radius: 3px;
      color: #bcc5dc;
      &.active {
        background: linear-gradient(to right, #027bff 0%, #44baff 100%);
        color: #ffff;
      }
    }
  }
}
</style>
