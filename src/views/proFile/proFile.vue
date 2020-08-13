<template>
  <div id="profile">
    <tab-bar>
      <tab-bar-item path="/data">
        <img slot="itemIcon" src="@/assets/img/tabBar/icon_ziliao_w.png" alt />
        <img slot="itemIconActive" src="@/assets/img/tabBar/icon_ziliao.png" alt />
        <div slot="itemText">资料</div>
      </tab-bar-item>
      <tab-bar-item path="/dealMetter">
        <img slot="itemIcon" src="@/assets/img/tabBar/icon_banli_w.png" alt />
        <img slot="itemIconActive" src="@/assets/img/tabBar/icon_banli.png" alt />
        <div slot="itemText">办理事项</div>
      </tab-bar-item>
      <tab-bar-item path="/proFile">
        <img slot="itemIcon" src="@/assets/img/tabBar/icon_geren_w.png" alt />
        <img slot="itemIconActive" src="@/assets/img/tabBar/icon_geren.png" alt />
        <div slot="itemText">个人中心</div>
      </tab-bar-item>
    </tab-bar>
    <div class="backgroundPic">
      <img src="@/assets/img/profile/background.png" alt class="bigPic" />
      <img :src="myDate.headimgurl" alt class="userPhote" />
      <div class="userInfo">
        <p class="userName">{{myDate.nickname}}</p>
        <p v-if="myDate.telephone" class="userPhone">{{myDate.telephone}}</p>
        <img v-else class="phoneBtn" src="@/assets/img/profile/phoneBtn.png" alt @click="phoneBtnClick" />
      </div>
    </div>
    <div class="header">个人中心</div>
    <div class="userAction">
      <div class="actionItem" @click="maskShow=true">
        <img src="@/assets/img/profile/danweibangding.png" alt />
        <p>单位绑定</p>
      </div>
      <div class="actionItem" @click="turnToPayment">
        <img src="@/assets/img/profile/zhifujilu.png" alt />
        <p>支付记录</p>
      </div>
      <div class="actionItem" @click="weChatClick">
        <img src="@/assets/img/profile/kefu.png" alt />
        <p>专属客服</p>
      </div>
    </div>
    <van-overlay :show="maskShow">
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-form @submit="onSubmit">
            <van-field
              v-model="number"
              name="number"
              label="账号"
              placeholder="营业执照注册号"
              :rules="[{ required: true, message: '营业执照注册号' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 40px 50px 0">
              <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
          </van-form>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar/tabBar";
import tabBarItem from "@/components/tabBar/tabBarItem";
import axios from "../../request";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
import { Toast } from "vant";
export default {
  components: { tabBar, tabBarItem },
  data() {
    return {
      number: "",
      password: "",
      maskShow: false,
      myDate: {},
    };
  },
  methods: {
    onSubmit(value) {
      if (!/^[a-zA-Z0-9]{4,23}$/.test(value.number)) {
        Toast({ message: "请输入正确的账号", className: "proFileToastStyle" });
      } else {
        Toast.loading({
          message: "绑定中...",
          forbidClick: true,
          className: "proFileToastStyle",
        });
        axios
          .post("/api/WxLogin/checkLogin", {
            ...value,
            openid: this.myDate.openid,
          })
          .then((res) => {
            if (res.code == 1) {
              this.maskShow = false;
              Toast.clear();
              Toast({ message: "绑定成功", className: "proFileToastStyle" });
              localStorage.setItem("number", res.data.number);
            } else {
              Toast({
                message: "账号或密码不正确",
                className: "proFileToastStyle",
              });
            }
          });
      }
    },
    phoneBtnClick() {
      Toast({ message: "功能暂未开放", className: "proFileToastStyle" });
    },
    weChatClick() {
      Toast({ message: "功能暂未开放", className: "proFileToastStyle" });
    },
    turnToPayment() {
      this.$router.push("/payment");
    },
    GetUrlParame(parameName) {
      var parames = window.location.search;
      if (parames.indexOf(parameName) > -1) {
        var parameValue = "";
        parameValue = parames.substring(
          parames.indexOf(parameName),
          parames.length
        );
        if (parameValue.indexOf("&") > -1) {
          parameValue = parameValue.substring(0, parameValue.indexOf("&"));
          parameValue = parameValue.replace(parameName + "=", "");
          return parameValue;
        }
        return "";
      }
    },
  },
  created() {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      this.myDate = data;
    }
  },
  mounted() {
    if (this.GetUrlParame("code")) {
      axios
        .post("/api/user/index", { code: this.GetUrlParame("code") })
        .then((res) => {
          if (res.code == 11) {
            Toast({
              message: "请先完成企业绑定",
              className: "proFileToastStyle",
            });
            this.maskShow = true;
          }
          if (res.code == 1) {
            localStorage.setItem("number", res.data.com_number);
          }
          this.myDate = res.data;
          localStorage.setItem("data", JSON.stringify(res.data));
        });
    }
  },
};
</script>

<style scoped lang="scss">
#profile {
  .backgroundPic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    .userInfo {
      position: absolute;
      top: 88px;
      left: 25px;
      .userName {
        font-size: 26px;
        color: #fff;
      }
      .userPhone {
        margin-top: 15px;
        color: #fff;
        font-size: 14px;
      }
      .phoneBtn {
        margin-top: 15px;
        width: 84px;
      }
    }
    .bigPic {
      width: 100%;
    }
    .userPhote {
      position: absolute;
      top: 85px;
      right: 25px;
      width: 74px;
      border-radius: 50%;
    }
  }
  .header {
    width: 100%;
    height: 65px;
    line-height: 90px;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    color: #fff;
  }
  .userAction {
    display: flex;
    justify-content: space-around;
    margin-top: 160px;
    .actionItem {
      img {
        width: 55px;
      }
      p {
        line-height: 30px;
        font-size: 13px;
        font-weight: bold;
        color: #000;
      }
    }
  }
  /deep/.van-overlay {
    z-index: 100;
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      .block {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 260px;
        background-color: #fff;
        border-radius: 10px;
        .van-form {
          width: 95%;
          .van-field__label {
            width: 5em;
          }
          .van-field__error-message {
            display: none;
          }
        }
      }
    }
  }
}
</style>
<style>
.proFileToastStyle {
  top: 35%;
}
</style>