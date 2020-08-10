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
      <img src="@/assets/img/profile/circle.png" alt class="userPhote" />
      <div class="userInfo">
        <p class="userName">用户姓名</p>
        <!-- <p class="userPhone">13753495971</p> -->
        <img class="phoneBtn" src="@/assets/img/profile/phoneBtn.png" alt />
      </div>
    </div>
    <div class="header">个人中心</div>
    <div class="userAction">
      <div class="actionItem">
        <img src="@/assets/img/profile/danweibangding.png" alt />
        <p>单位绑定</p>
      </div>
      <div class="actionItem" @click="turnToPayment">
        <img src="@/assets/img/profile/zhifujilu.png" alt />
        <p>支付记录</p>
      </div>
      <div class="actionItem">
        <img src="@/assets/img/profile/kefu.png" alt />
        <p>专属客服</p>
      </div>
    </div>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar/tabBar";
import tabBarItem from "@/components/tabBar/tabBarItem";
export default {
  components: { tabBar, tabBarItem },
  data() {
    return {};
  },
  methods: {
    turnToPayment(){
      this.$router.push("/payment");
    }
  },
  created() {},
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
}
</style>
