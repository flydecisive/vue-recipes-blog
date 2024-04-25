<template>
  <button class="button__accent"><slot></slot></button>
</template>

<script>
export default {
  name: "AccentButton",
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.button {
  &__accent {
    background: $primary-color-2;
    border: none;
    border-radius: 24px;
    padding: 12px 24px;
    color: $dark;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    box-sizing: border-box;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
