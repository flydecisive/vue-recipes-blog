<template>
  <div class="auth-input__wrapper">
    <label class="auth-input__label">{{ label }}</label>
    <input
      :type="inputType"
      class="auth-input__input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "AuthInput",
  props: {
    label: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.auth-input {
  &__wrapper {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;
    align-items: flex-start;
  }

  &__label {
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    color: $dark;
  }

  &__input {
    width: 100%;
    padding: 10px 8px;
    font-size: 16px;
    line-height: 110%;
    color: $dark;
    border: none;
    background: transparent;
    border: 1px solid rgba(38, 37, 34, 0.24);
    border-radius: 8px;
    box-sizing: border-box;

    &:hover {
      cursor: pinter;
    }

    &:focus {
      border: 1px solid rgba(38, 37, 34, 0.24);
      outline: none;
    }
  }
}
</style>
