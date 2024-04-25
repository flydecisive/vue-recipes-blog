<template>
  <div class="modal__layer"></div>
</template>

<script>
export default {
  name: "ModalLayer",
};
</script>

<style scoped lang="scss">
.modal {
  &__layer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: red;
  }
}
</style>
