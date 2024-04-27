<template>
  <div class="section_label">{{ text }}</div>
</template>

<script>
export default {
  name: "SectionLabel",
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.section_label {
  border-radius: 12px;
  padding: 4px 8px;
  box-sizing: border-box;
  background: $primary-color-3;
  color: $main-text-light;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 114%;
  font-weight: 500;
  width: fit-content;
}
</style>
