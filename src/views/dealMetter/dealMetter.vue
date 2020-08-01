<template>
  <div id="dealMetter">
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
    <div class="header">办理事项</div>
    <div class="mettersWrap">
      <van-tabs animated :border="false" color="#0072ff" title-active-color="#0072ff">
        <van-tab title="全部">
          <div class="metterItem">
            <div class="metterItemHead">
              <span>145948894154</span>
              <span>打款验证中</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">资质维护</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥1000</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥2000</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">2020-12-12 10:10:10</span>
              <span class="labelText">预计需要2个工作日，请您耐心等待...</span>
            </div>
          </div>
          <div class="metterItem" v-for="item in 5">
            <div class="metterItemHead">
              <span>145948894154</span>
              <span>打款验证中</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">资质维护</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥1000</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥2000</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">2020-12-12 10:10:10</span>
              <!-- <span class="labelText" >预计需要2个工作日，请您耐心等待...</span> -->
              <button class="payBtn">支付尾款</button>
            </div>
          </div>
        </van-tab>
        <van-tab title="待付款">
          <div class="metterItem">
            <div class="metterItemHead">
              <span>145948894154</span>
              <span>打款验证中</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">资质维护</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥1000</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥2000</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">2020-12-12 10:10:10</span>
              <span class="labelText">预计需要2个工作日，请您耐心等待...</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="办理中">
          <div class="metterItem">
            <div class="metterItemHead">
              <span>145948894154</span>
              <span>打款验证中</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">资质维护</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥1000</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥2000</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">2020-12-12 10:10:10</span>
              <span class="labelText">预计需要2个工作日，请您耐心等待...</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="已完成">
          <div class="metterItem">
            <div class="metterItemHead">
              <span>145948894154</span>
              <span>打款验证中</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">资质维护</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥1000</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥2000</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">2020-12-12 10:10:10</span>
              <span class="labelText">预计需要2个工作日，请您耐心等待...</span>
            </div>
          </div>
        </van-tab>
      </van-tabs>
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
  methods: {},
  created() {},
};
</script>

<style scoped lang="scss">
#dealMetter {
  height: max-content;
  padding-bottom: 200px;
  background-color: #f2f4f8;
  .header {
    width: 100%;
    height: 65px;
    line-height: 90px;
    border-bottom: 1px solid #f3f3f3;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    background-color: #fff;
  }
  .mettersWrap {
    .metterItem {
      width: 92%;
      margin: 15px auto 0;
      background-color: #fff;
      border-radius: 4px;
      overflow: hidden;
      font-family: PingFang SC;
      .metterItemHead {
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        background-color: #1bb39f;
        font-size: 12px;
        color: #fff;
      }
      .metterItemContent {
        width: 100%;
        min-height: 85px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        .contentItem {
          .itemTitle {
            margin-bottom: 10px;
            font-size: 14px;
            font-weight: bold;
          }
          .itemText {
            font-size: 12px;
            color: #969fb4;
            &.money {
              font-size: 13px;
              color: #ff4f4f;
            }
          }
        }
      }
      .metterItemBottom {
        width: 100%;
        height: 35px;
        line-height: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        font-size: 11px;
        color: #969fb4;
        .payBtn {
          border: none;
          outline: none;
          height: 24px;
          line-height: 20px;
          border-radius: 5px;
          background-color: #ff4f4f;
          color: #fff;
          font-size: 11px;
        }
      }
    }
  }
}
</style>
<style lang="scss" >
#app {
  height: 100%;
}
#dealMetter {
  .van-tabs__nav {
    padding: 0 26px !important;
    justify-content: space-between;
  }
  .van-tab {
    padding: 0 !important;
    font-size: 15px !important;
    flex: none !important;
  }
  .van-tabs__line {
    height: 2px !important;
    bottom: 0px !important;
    width: 7% !important;
  }
}
</style>
