<template>
  <div>
    <div class="payTableWrap">
      <table>
        <thead>
          <tr>
            <th>事项</th>
            <th>金额</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{item.bus_type}}</td>
            <td>{{item.money}}</td>
            <td>{{item.create_time}}</td>
          </tr>
        </tbody>
      </table>
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
      tableData: [],
    };
  },
  methods: {
    getTableList() {
      axios
        .post("/api/Item/payRecord", {
          id: JSON.parse(localStorage.getItem("companyInfo")).id,
        })
        .then((res) => {
          if (res.code == 1) {
            this.tableData = res.data;
          }
        });
    },
    routeBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getTableList();
  },
};
</script>

<style scoped lang="scss">
.payTableWrap {
  width: 100%;
  table {
    width: 100%;
    tr {
      height: 40px;
      font-size: 13px;
      th {
        border-bottom: 1px solid #f2f2f2;
      }
      td {
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>
