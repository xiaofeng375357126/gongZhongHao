<template>
  <div id="login">
    <div class="title">国图管家</div>
    <form class="formWrap">
      <div>
        <label for="userName" class="label">账号</label>
        <input id="userName" v-model="loginForm.number" placeholder="营业执照注册号/手机号" />
      </div>
      <div>
        <label for="passWord" class="label">密码</label>
        <input id="passWord" type="password" v-model="loginForm.password" placeholder="请输入密码" />
      </div>
    </form>
    <div class="submitWrap">
      <button class="submitBtn active" @click="loginBtnClick">查询并绑定</button>
      <button class="WXBtn" @click="WXLoginClick">微信授权登录</button>
    </div>
  </div>
</template>

<script>
import axios from "../request/index";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      loginForm: {
        number: "",
        password: "",
      },
    };
  },
  methods: {
    loginBtnClick() {
      Toast({ message: "请使用微信授权登录", className: "loginToastStyle" });
      return;
      if (!/^[a-zA-Z0-9]{4,23}$/.test(this.loginForm.number)) {
        Toast("请输入正确的账号");
      } else {
        Toast.loading({ message: "登录中...", forbidClick: true });
        axios.post("/api/WxLogin/checkLogin", this.loginForm).then((res) => {
          if (res.code == 1) {
            this.$router.push("/proFile");
          } else {
            Toast("账号或密码不正确");
          }
        });
      }
    },
    WXLoginClick() {
      window.location.href = "http://www.guotujt.com/api/WxLogin/authorization";
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
#login {
  .title {
    width: 304px;
    margin: 0 auto;
    padding-top: 80px;
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
        color: #fff;
      }
    }
    .WXBtn {
      border: none;
      width: 100%;
      height: 44px;
      margin-top: 15px;
      background: #1aad19;
      border-radius: 3px;
      color: #fff;
    }
  }
}
</style>
<style>
.loginToastStyle {
  top: 35%;
}
</style>