<template>
  <div>
    <div class="header">
      <img class="routeBackBtn" src="@/assets/img/personDetails/icon_gd.png" alt @click="routeBack" />
      <span>人员详情</span>
    </div>
    <div class="personInfoWrap">
      <img class="bgImg" src="@/assets/img/personDetails/bj.png" alt />
      <div class="personInfo">
        <img class="bgAllImg" src="@/assets/img/personDetails/kapian.png" alt />
        <div class="photoPic">
          <img :src="detailsInfo.id_card_img.url" alt />
        </div>
        <p class="mainInfo">
          <span class="name">{{detailsInfo.name}}</span>
          <span class="duty">{{detailsInfo.certificate_level}}-{{detailsInfo.major}}</span>
        </p>
        <p class="idCard">
          <span class="idCardNum">身份证号</span>
          <span>{{detailsInfo.id_card}}</span>
        </p>
        <p class="idCard">
          <span class="idCardNum">证书编号</span>
          <span>{{detailsInfo.certificate_id}}</span>
        </p>
        <div class="timeGroup">
          <span class="timeTitle">
            <img src="@/assets/img/personDetails/button_01.png" alt />到期时间
          </span>
          <span class="time">{{detailsInfo.expire_time}}</span>
          <span class="timeTitle">
            <img src="@/assets/img/personDetails/button_01.png" alt />公示时间
          </span>
          <span class="time">{{detailsInfo.publicity_time}}</span>
        </div>
      </div>
    </div>
    <div class="paperInfo">
      <p class="title">证件图片</p>
      <div class="paperImg">
        <div class="paperImgItem" v-if="detailsInfo.id_card_img">
          <div class="img">
            <img :src="detailsInfo.id_card_img.url" alt />
          </div>
          <p class="imgText">身份证</p>
        </div>
        <div class="paperImgItem" v-if="detailsInfo.certificate_img">
          <div class="img">
            <img :src="detailsInfo.certificate_img.url" alt />
          </div>
          <p class="imgText">证书</p>
        </div>
        <div class="paperImgItem" v-if="detailsInfo.register_cert">
          <div class="img">
            <img :src="detailsInfo.register_cert.url" alt />
          </div>
          <p class="imgText">注册证</p>
        </div>
        <div class="paperImgItem" v-if="detailsInfo.zige_cert">
          <div class="img">
            <img :src="detailsInfo.zige_cert.url" alt />
          </div>
          <p class="imgText">资格证</p>
        </div>
        <div class="paperImgItem" v-if="detailsInfo.diploma_cert">
          <div class="img">
            <img :src="detailsInfo.diploma_cert.url" alt />
          </div>
          <p class="imgText">毕业证</p>
        </div>
        <div class="paperImgItem" v-if="detailsInfo.zhuli_cert">
          <div class="img">
            <img :src="detailsInfo.zhuli_cert.url" alt />
          </div>
          <p class="imgText">助理工程师</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../request/index";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default {
  components: {},
  data() {
    return {
      detailsInfo: {
        id_card_img: {},
      },
    };
  },
  methods: {
    getDetailsData() {
      axios
        .post("/api/componyInfo/personDeal", { id: this.$route.params.id })
        .then((res) => {
          if (res.code == 1) {
            this.detailsInfo = res.data[0];
          }
          console.log(res);
        });
    },
    routeBack() {
      this.$router.go(-1);
    },
  },
  created() {
    console.log(this.$route.params.id);
    this.getDetailsData();
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  width: 100%;
  height: 65px;
  line-height: 90px;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  .routeBackBtn {
    position: absolute;
    left: 15px;
    top: 38px;
    width: 9px;
  }
}
.personInfoWrap {
  position: relative;
  width: 100%;
  height: 230px;
  padding: 30px;
  box-sizing: border-box;
  .bgImg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
  }
  .personInfo {
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-top: 25px;
    margin: 0 auto;
    box-sizing: border-box;
    color: #fff;
    .bgAllImg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
    }
    .photoPic {
      position: absolute;
      top: 20px;
      right: 50px;
      width: 66px;
      height: 80px;
      background-color: #486bd3;
      img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
    }
    .mainInfo {
      margin-bottom: 15px;
      .name {
        margin-right: 20px;
        font-size: 16px;
        font-weight: 700;
      }
      .duty {
        font-size: 13px;
      }
    }
    .idCard {
      line-height: 22px;
      font-size: 12px;
      opacity: 0.8;
      .idCardNum {
        display: inline-block;
        width: 50px;
        margin-right: 5px;
      }
    }
    .timeGroup {
      margin-top: 15px;
      .timeTitle {
        position: relative;
        display: inline-block;
        width: 54px;
        height: 22px;
        line-height: 22px;
        margin-right: 10px;
        text-align: center;
        font-size: 10px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
        }
      }
      .time {
        margin-right: 15px;
        font-size: 12px;
      }
    }
  }
}
.paperInfo {
  padding: 0 15px 15px;
  .title {
    line-height: 50px;
    font-size: 17px;
    font-weight: 700;
    color: #1b1b1b;
    border-bottom: 1px solid #f3f3f3;
  }
  .paperImg {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 15px;
    .paperImgItem {
      width: 100px;
      margin-bottom: 15px;
      text-align: center;
      .img {
        width: 100%;
        height: 125px;
        box-shadow: 0 0 2px 2px #f3f3f3;
        img {
          width: 100%;
          height: 100%;
        }
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
</style>
