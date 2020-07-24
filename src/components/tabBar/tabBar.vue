<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.tabBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  background: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  font-size: 12px;
}
</style>