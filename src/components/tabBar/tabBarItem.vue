<template>
  <div class="tabBarItem" @click="turnToUrl">
    <div v-if="!isActive">
      <slot name="itemIcon"></slot>
    </div>
    <div v-else>
      <slot name="itemIconActive"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    turnToUrl() {
      this.$router.replace(this.path);
    }
  }
};
</script>
<style lang="scss">
.tabBarItem {
  flex: 1;
  text-align: center;
  height: 49px;
  img {
    width: 24px;
    height: 24px;
  }
  .active {
    color: red;
  }
}
</style>