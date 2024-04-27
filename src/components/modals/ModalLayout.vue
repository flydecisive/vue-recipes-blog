<template>
  <Transition>
    <div class="modal__layer" v-if="isShow" @click.stop="closeModal">
      <div class="modal__content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "ModalLayer",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.modal {
  &__layer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(240, 235, 225, 0.6);
    display: flex;
  }

  &__content {
    margin: auto;
    min-width: 50px;
    min-height: 50px;
    background: $light;
    border-radius: 24px;
    padding: 24px;
    box-sizing: border-box;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
