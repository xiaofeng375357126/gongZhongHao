<template>
  <div>
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
    <div class="header">资 料</div>
    <div class="bannerWrap">
      <img src="@/assets/img/banner2.png" alt />
    </div>
    <div class="baseInfo">
      <p class="title">基本信息</p>
      <div class="infoContent">
        <p class="infoItem">
          <span class="infoIcon">公司名称</span>
          <span>{{companyInfo.title}}</span>
        </p>
        <p class="infoItem">
          <span class="infoIcon">统一信用代码</span>
          <span class="infoCode">91140105MDF563DFFS225</span>
        </p>
      </div>
    </div>
    <div class="paperInfo">
      <p class="title">证件信息</p>
      <div class="paperImg">
        <div class="paperImgItem" v-for="item in companyInfoPic" :key="item.img_urls">
          <div class="img">
            <img :src="item.img_urls" />
            <p
              class="imgText"
            >（{{item.type_name.length>10?item.type_name.substring(0,4)+"...":item.type_name}}）</p>
          </div>
        </div>
      </div>
    </div>
    <div class="personInfo">
      <div class="title">人员信息</div>
      <van-tabs
        animated
        :border="false"
        color="#0072ff"
        title-active-color="#0072ff"
        @click="tabBtnClick"
      >
        <van-tab title="全部">
          <table class="personTable">
            <thead>
              <tr>
                <th>姓名</th>
                <th>专业</th>
                <th>级别</th>
                <th>证书编号</th>
                <th>到期时间</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item1 in tableList" :key="item1.id">
                <td>{{item1.name}}</td>
                <td>{{item1.major.substring(0,4)}}</td>
                <td>{{item1.certificate_level}}</td>
                <td>{{item1.certificate_id}}</td>
                <td>{{item1.expire_time}}</td>
                <td>
                  <img
                    src="@/assets/img/icon_xq_w.png"
                    style="width:12px"
                    @click="turnToDetails"
                    :data-id="item1.id"
                    alt
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </van-tab>
        <van-tab :title="item.type_name" v-for="(item,index) in tableMenu">
          <table class="personTable" v-if="(index+1)==tabActiveIndex">
            <thead>
              <tr>
                <th>姓名</th>
                <th>专业</th>
                <th>级别</th>
                <th>证书编号</th>
                <th>到期时间</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item1 in tableList" :key="item1.id">
                <td>{{item1.name}}</td>
                <td>{{item1.major.substring(0,4)}}</td>
                <td>{{item1.certificate_level}}</td>
                <td>{{item1.certificate_id}}</td>
                <td>{{item1.expire_time}}</td>
                <td>
                  <img
                    src="@/assets/img/icon_xq_w.png"
                    style="width:12px"
                    @click="turnToDetails($event)"
                    :data-id="item1.id"
                    alt
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </van-tab>
      </van-tabs>
    </div>
    <div class="more">
      <button
        class="moreBtn"
        @click="getMoreBtnClick"
        v-if="pageInfo.page<pageInfo.last_page"
      >点击加载更多</button>
    </div>
  </div>
</template>

<script>
import axios from "../../request/index";
import tabBar from "@/components/tabBar/tabBar";
import tabBarItem from "@/components/tabBar/tabBarItem";
import { Toast } from "vant";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default {
  components: { tabBar, tabBarItem },
  data() {
    return {
      companyInfo: {},
      companyInfoPic: [],
      tableList: [],
      tableMenu: [],
      tabActiveIndex: null,
      pageInfo: {
        limit: 10,
        page: 1,
        total: 0,
        last_page: 0,
      },
    };
  },
  methods: {
    getData() {
      axios
        .post("/api/componyInfo/index", { number: "911401050910319443" })
        .then((res) => {
          if (res.code == 1) {
            for (const item of res.data.picture) {
              for (const item1 of item.img_urls) {
                this.companyInfoPic.push({
                  type: item.type,
                  type_name: item.type_name,
                  img_urls: item1,
                });
              }
            }
            this.companyInfo = res.data;
            localStorage.setItem(
              "companyInfo",
              JSON.stringify(this.companyInfo)
            );
            this.getTableList();
          }
        });
    },

    getMoreBtnClick() {
      this.pageInfo.page += 1;
      this.getTableList();
    },
    tabBtnClick(index) {
      this.tableList = [];
      this.tabActiveIndex = index;
      this.pageInfo.page = 1;
      this.getTableList();
    },
    getTableList() {
      Toast.loading({ message: "加载中...", forbidClick: true });
      axios
        .post("/api/componyInfo/personnelList", {
          id: this.companyInfo.id,
          member_tab_id: this.tabActiveIndex,
          limit: this.pageInfo.limit,
          page: this.pageInfo.page,
        })
        .then((res) => {
          if (res.code == 1) {
            if (!res.data.list.data.length > 0) {
              Toast("暂无数据");
              this.pageInfo.last_page = res.data.list.last_page;
              this.tableList = [];
              this.tableMenu = res.data.menu;
              return;
            }
            this.tableMenu = res.data.menu;
            this.tableList = this.tableList.concat(res.data.list.data);
            this.pageInfo.last_page = res.data.list.last_page;
          }
          Toast.clear();
        });
    },
    turnToDetails(event) {
      this.$router.push({
        name: "personDetails",
        params: {
          id: event.target.dataset.id,
        },
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 65px;
  line-height: 90px;
  border-bottom: 1px solid #f3f3f3;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
}
.bannerWrap {
  padding: 10px;
  img {
    width: 100%;
  }
}
.baseInfo {
  padding: 0 15px 15px;
  border-bottom: 10px solid #f2f4f8;
  .title {
    line-height: 50px;
    font-size: 17px;
    font-weight: 700;
    color: #1b1b1b;
  }
  .infoContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #f2f4f8;
    .infoItem {
      font-size: 14px;
      color: #333;
      line-height: 32px;
      .infoIcon {
        display: inline-block;
        padding: 0 12px;
        margin-right: 12px;
        height: 20px;
        line-height: 20px;
        border-radius: 12px;
        background-color: #0079ff;
        color: #fff;
        font-size: 10px;
      }
      .infoCode {
        opacity: 0.5;
      }
    }
  }
}
.paperInfo {
  padding: 0 11px 15px;
  border-bottom: 10px solid #f2f4f8;
  .title {
    padding-left: 4px;
    box-sizing: border-box;
    line-height: 50px;
    font-size: 17px;
    font-weight: 700;
    color: #1b1b1b;
    border-bottom: 1px solid #f3f3f3;
  }
  .paperImg {
    display: flex;
    flex-wrap: wrap;
    .paperImgItem {
      width: 25%;
      margin-top: 15px;
      text-align: center;
      .img {
        img {
          width: 82px;
          height: 110px;
        }
        .imgText {
          margin-top: 10px;
          font-size: 12px;
          color: #1b1b1b;
          opacity: 0.5;
        }
      }
    }
  }
}
.personInfo {
  padding: 0 15px 15px;
  .title {
    line-height: 50px;
    font-size: 17px;
    font-weight: 700;
    color: #1b1b1b;
    border-bottom: 1px solid #f3f3f3;
  }
  .personTable {
    width: 100%;
    border-radius: 5px;
    padding: 20px 10px;
    margin-top: 15px;
    background-color: #f2f4f8;
    font-size: 10px;
  }
  .personTable tr {
    height: 30px;
  }
  .personTable th {
    opacity: 0.5;
  }
  .personTable tr td {
    text-align: center;
  }
}
.more {
  height: 1px;
  margin-bottom: 100px;
  text-align: center;
  .moreBtn {
    background: none;
    border: none;
    font-size: 14px;
    color: #999;
  }
}
</style>
<style lang="scss">
.personInfo {
  .van-tabs__nav {
    padding: 0 8px !important;
    justify-content: space-between;
  }
  .van-tab {
    padding: 0 !important;
    font-size: 12px !important;
    flex: none !important;
  }
  .van-tabs__line {
    height: 2px !important;
    bottom: 5px !important;
    width: 7% !important;
  }
}
</style>
