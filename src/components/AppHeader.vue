<template>
  <header class="header">
    <router-link to="/"><app-logo /></router-link>
    <AppNav />
    <div class="header__buttons">
      <search-button />
      <primary-dark-button>кнопка</primary-dark-button>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import AppNav from "./AppNav.vue";
import AppLogo from "@/components/icons/AppLogo.vue";
import PrimaryDarkButton from "@/ui/buttons/PrimaryDarkButton.vue";
import SearchButton from "@/ui/buttons/SearchButton.vue";

export default defineComponent({
  name: "AppHeader",

  components: {
    AppNav,
    AppLogo,
    PrimaryDarkButton,
    SearchButton,
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
