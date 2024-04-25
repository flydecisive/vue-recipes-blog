<template>
  <button class="button__primary"><slot></slot></button>
</template>

<script>
export default {
  name: "PrimaryDarkButton",
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.button {
  &__primary {
    background-color: $dark;
    color: $main-text-light;
    border: none;
    padding: 12px 24px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 100%;
    text-transform: uppercase;
    border-radius: 24px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
