<template>
  <button class="button-transparent">{{ text }}</button>
</template>

<script>
export default {
  name: "TransparentButton",
  props: {
    text: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.button-transparent {
  border: 1px solid $dark;
  color: $dark;
  border-radius: 24px;
  padding: 12px 24px;
  box-sizing: border-box;
  width: fit-content;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  width: fit-content;
  transition: all 0.3s;
  background: transparent;

  &:hover {
    cursor: pointer;
    box-shadow: 0px -8px 12px -5px rgba(38, 37, 34, 0.6) inset;
  }
}
</style>
