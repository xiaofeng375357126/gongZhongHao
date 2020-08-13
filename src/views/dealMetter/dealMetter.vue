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
    <div class="mettersWrap">
      <van-tabs
        animated
        :border="false"
        color="#0072ff"
        title-active-color="#0072ff"
        @click="getMetterList"
      >
        <van-tab title="全部">
          <div class="metterItem" v-for="item in metterList" :key="item.id">
            <div
              class="metterItemHead"
              :style="{'background-color':item.bgColor=='green'?'#1BB39F':item.bgColor=='blue'?'#5A82F0':item.bgColor=='yellow'?'#FF914F':item.bgColor=='red'?'#f34e4e':''}"
            >
              <span>{{item.contract_code}}</span>
              <span>{{item.hands_state}}</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">{{item.bus_type}}</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥{{item.total_money}}</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥{{item.ready_money}}</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">{{item.update_time}}</span>
              <button
                class="payBtn"
                v-if="item.hands_state_code==2||item.hands_state_code==3||item.hands_state_code==9"
              >支付尾款</button>
              <span v-else class="labelText">预计需要2个工作日，请您耐心等待...</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="待付款">
          <div class="metterItem" v-for="item in metterList" :key="item.id">
            <div
              class="metterItemHead"
              :style="{'background-color':item.bgColor=='green'?'#1BB39F':item.bgColor=='blue'?'#5A82F0':item.bgColor=='yellow'?'#FF914F':item.bgColor=='red'?'#f34e4e':''}"
            >
              <span>{{item.contract_code}}</span>
              <span>{{item.hands_state}}</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">{{item.bus_type}}</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥{{item.total_money}}</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥{{item.ready_money}}</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">{{item.update_time}}</span>
              <button
                class="payBtn"
                v-if="item.hands_state_code==2||item.hands_state_code==3||item.hands_state_code==9"
              >支付尾款</button>
              <span v-else class="labelText">预计需要2个工作日，请您耐心等待...</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="办理中">
          <div class="metterItem" v-for="item in metterList" :key="item.id">
            <div
              class="metterItemHead"
              :style="{'background-color':item.bgColor=='green'?'#1BB39F':item.bgColor=='blue'?'#5A82F0':item.bgColor=='yellow'?'#FF914F':item.bgColor=='red'?'#f34e4e':''}"
            >
              <span>{{item.contract_code}}</span>
              <span>{{item.hands_state}}</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">{{item.bus_type}}</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥{{item.total_money}}</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥{{item.ready_money}}</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">{{item.update_time}}</span>
              <button
                class="payBtn"
                v-if="item.hands_state_code==2||item.hands_state_code==3||item.hands_state_code==9"
              >支付尾款</button>
              <span v-else class="labelText">预计需要2个工作日，请您耐心等待...</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="已完成">
          <div class="metterItem" v-for="item in metterList" :key="item.id">
            <div
              class="metterItemHead"
              :style="{'background-color':item.bgColor=='green'?'#1BB39F':item.bgColor=='blue'?'#5A82F0':item.bgColor=='yellow'?'#FF914F':item.bgColor=='red'?'#f34e4e':''}"
            >
              <span>{{item.contract_code}}</span>
              <span>{{item.hands_state}}</span>
            </div>
            <div class="metterItemContent">
              <div class="contentItem">
                <p class="itemTitle">办理事项</p>
                <p class="itemText">{{item.bus_type}}</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">合同金额</p>
                <p class="itemText">¥{{item.total_money}}</p>
              </div>
              <div class="contentItem">
                <p class="itemTitle">已付款</p>
                <p class="itemText money">¥{{item.ready_money}}</p>
              </div>
            </div>
            <div class="metterItemBottom">
              <span class="time">{{item.update_time}}</span>
              <button
                class="payBtn"
                v-if="item.hands_state_code==2||item.hands_state_code==3||item.hands_state_code==9"
              >支付尾款</button>
              <span v-else class="labelText">预计需要2个工作日，请您耐心等待...</span>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <div class="noMetterList" v-if="metterList.length==0">暂无数据</div>
    </div>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar/tabBar";
import tabBarItem from "@/components/tabBar/tabBarItem";
import axios from "../../request";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default {
  components: { tabBar, tabBarItem },
  data() {
    return {
      metterList: [],
    };
  },
  methods: {
    getMetterList(index) {
      this.metterList = [];
      if (index == 0) {
        index = null;
      }
      axios
        .post("/api/Item/itemIndex", {
          id: JSON.parse(localStorage.getItem("data")).company_id,
          // id: 1218,
          state: index,
        })
        .then((res) => {
          if (res.code == 1) {
            if (res.data.length > 0) {
              for (const item of res.data) {
                if (
                  item.hands_state_code == 2 ||
                  item.hands_state_code == 3 ||
                  item.hands_state_code == 9
                ) {
                  item.bgColor = "green";
                } else if (
                  item.hands_state_code == 4 ||
                  item.hands_state_code == 5 ||
                  item.hands_state_code == 6 ||
                  item.hands_state_code == 7 ||
                  item.hands_state_code == 8
                ) {
                  item.bgColor = "blue";
                } else if (item.hands_state_code == 12) {
                  item.bgColor = "yellow";
                } else if (item.hands_state_code == 11) {
                  item.bgColor = "red";
                } else {
                }
              }
              this.metterList = res.data;
            }
          }
        });
    },
  },
  created() {
    this.getMetterList();
  },
};
</script>

<style scoped lang="scss">
#dealMetter {
  height: max-content;
  .mettersWrap {
    /deep/.van-tabs__wrap {
      box-shadow: 0 1px 5px #eee;
    }
    .metterItem {
      &:last-child {
        margin-bottom: 100px;
      }
      width: 92%;
      margin: 15px auto 0;
      overflow: hidden;
      background-color: #fff;
      border-radius: 4px;
      font-family: PingFang SC;
      box-shadow: 0 0 10px 2px #ddd;
      .metterItemHead {
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        background-color: #b7b9b9;
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
          background-color: #ffa753;
          color: #fff;
          font-size: 11px;
        }
      }
    }
    .noMetterList {
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
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
.dealMetterToastStyle {
  top: 35%;
}
</style>
