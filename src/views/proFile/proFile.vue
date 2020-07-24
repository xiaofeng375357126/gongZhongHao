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

<style scoped lang="'scss'">
</style>
