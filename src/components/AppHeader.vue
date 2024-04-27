<template>
  <header class="header">
    <router-link to="/"><app-logo /></router-link>
    <AppNav />
    <div class="header__buttons">
      <search-button />
      <primary-dark-button @click="handleHeaderButton()">{{
        $store.state.isAuth ? "Профиль" : "Войти"
      }}</primary-dark-button>
    </div>
  </header>

  <modal-layout :isShow="isModalOpen" @close="closeModal"
    ><auth-modal @close="closeModal"
  /></modal-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppNav from "./AppNav.vue";
import AppLogo from "@/components/icons/AppLogo.vue";
import PrimaryDarkButton from "@/ui/buttons/PrimaryDarkButton.vue";
import SearchButton from "@/ui/buttons/SearchButton.vue";
import ModalLayout from "@/components/modals/ModalLayout.vue";
import AuthModal from "./modals/AuthModal.vue";

export default defineComponent({
  name: "AppHeader",
  data() {
    return {
      isModalOpen: false,
    };
  },

  components: {
    AppNav,
    AppLogo,
    PrimaryDarkButton,
    SearchButton,
    ModalLayout,
    AuthModal,
  },

  methods: {
    handleHeaderButton() {
      if (!this.$store.state.isAuth) {
        this.isModalOpen = true;
      }
    },
    closeModal(value) {
      this.isModalOpen = value;
    },
  },
});
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  border-radius: 32px;
  border: 1px solid rgba(38, 37, 34, 0.24);
  padding: 0px 24px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  &__buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
