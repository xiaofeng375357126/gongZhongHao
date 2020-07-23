<template>
  <div>
    <div class="header">资 料</div>
    <div class="bannerWrap">
      <img src="@/assets/img/banner2.png" alt />
    </div>
    <div class="baseInfo">
      <p class="title">基本信息</p>
      <div class="infoContent">
        <p class="infoItem">
          <span class="infoIcon">公司名称</span>
          <span>山西众鑫源建筑有限公司</span>
        </p>
        <p class="infoItem">
          <span class="infoIcon">统一信用代码</span>
          <span class="infoCode">91140105MDF563DFFS225</span>
        </p>
        <p class="infoItem">
          <span class="infoIcon">公司名称</span>
          <span>山西众鑫源建筑有限公司</span>
        </p>
      </div>
    </div>
    <div class="paperInfo">
      <p class="title">证件信息</p>
      <div class="paperImg">
        <div class="paperImgItem">
          <div class="img"></div>
          <p class="imgText">（安许证）</p>
        </div>
        <div class="paperImgItem">
          <div class="img"></div>
          <p class="imgText">（营业执照）</p>
        </div>
      </div>
    </div>
    <div class="personInfo">
      <div class="title">人员信息</div>
      <van-tabs animated :border="false" color="#0072ff" title-active-color="#0072ff">
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
              <tr v-for="(item,index) in 4" :key="index">
                <td>张三</td>
                <td>张三</td>
                <td>高级</td>
                <td>14015004300125</td>
                <td>2018-07-14</td>
                <td><img src="@/assets/img/icon_xq_w.png" style="width:12px" alt=""></td>
              </tr>
            </tbody>
          </table>
        </van-tab>
        <van-tab title="建造师">
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
              <tr v-for="(item,index) in 4" :key="index">
                <td>张三</td>
                <td>张三</td>
                <td>高级</td>
                <td>14015004300125</td>
                <td>2018-07-14</td>
                <td><img src="@/assets/img/icon_xq.png" style="width:12px" alt=""></td>
              </tr>
            </tbody>
          </table>
        </van-tab>
        <van-tab title="工程师">
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
              <tr v-for="(item,index) in 4" :key="index">
                <td>张三</td>
                <td>张三</td>
                <td>高级</td>
                <td>14015004300125</td>
                <td>2018-07-14</td>
                <td><img src="@/assets/img/icon_xq_w.png" style="width:12px" alt=""></td>
              </tr>
            </tbody>
          </table>
        </van-tab>
        <van-tab title="技工">
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
              <tr v-for="(item,index) in 4" :key="index">
                <td>张三</td>
                <td>张三</td>
                <td>高级</td>
                <td>14015004300125</td>
                <td>2018-07-14</td>
                <td><img src="@/assets/img/icon_xq.png" style="width:12px" alt=""></td>
              </tr>
            </tbody>
          </table>
        </van-tab>
        <van-tab title="三类员工">
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
              <tr v-for="(item,index) in 4" :key="index">
                <td>张三</td>
                <td>张三</td>
                <td>高级</td>
                <td>14015004300125</td>
                <td>2018-07-14</td>
                <td><img src="@/assets/img/icon_xq.png" style="width:12px" alt=""></td>
              </tr>
            </tbody>
          </table>
        </van-tab>
        <van-tab title="特种工">
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
              <tr v-for="(item,index) in 4" :key="index">
                <td>张三</td>
                <td>张三</td>
                <td>高级</td>
                <td>14015004300125</td>
                <td>2018-07-14</td>
                <td><img src="@/assets/img/icon_xq_w.png" style="width:12px" alt=""></td>
              </tr>
            </tbody>
          </table>
        </van-tab>
        <van-tab title="八大员">
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
              <tr v-for="(item,index) in 4" :key="index">
                <td>张三</td>
                <td>张三</td>
                <td>高级</td>
                <td>14015004300125</td>
                <td>2018-07-14</td>
                <td><img src="@/assets/img/icon_xq_w.png" style="width:12px" alt=""></td>
              </tr>
            </tbody>
          </table>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scope lang="scss">
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
    height: 113px;
    padding: 15px 10px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #f2f4f8;
    .infoItem {
      font-size: 14px;
      color: #333;
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
  padding: 0 15px 15px;
  border-bottom: 10px solid #f2f4f8;
  .title {
    line-height: 50px;
    font-size: 17px;
    font-weight: 700;
    color: #1b1b1b;
    border-bottom: 1px solid #f3f3f3;
  }
  .paperImg {
    display: flex;
    padding-top: 15px;
    .paperImgItem {
      margin-right: 25px;
      text-align: center;
      .img {
        width: 82px;
        height: 110px;
        background-color: #e4e8ef;
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
.personInfo {
  padding: 0 15px 15px;
  margin-bottom: 100px;
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
</style>
<style>
.van-tabs__nav {
  padding: 0 10px;
  justify-content: space-between;
}
.van-tab {
  padding: 0 !important;
  font-size: 12px !important;
  flex: none !important;
}
.van-tabs__line {
  width: 7% !important;
}
</style>
