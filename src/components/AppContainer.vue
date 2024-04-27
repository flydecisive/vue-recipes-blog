<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppContainer",
};
</script>

<style scoped lang="scss">
.container {
  width: 1312px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  padding: 16px 0px;
  box-sizing: border-box;
}
</style>
