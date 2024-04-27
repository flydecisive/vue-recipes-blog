<template>
  <section class="main">
    <div class="main__hero">
      <div class="main__hero_wrapper">
        <h1 class="main__hero_title">Дайте волю кулинарному мастерству</h1>
        <p class="main__hero_text">
          Исследуйте мир вкусов, откройте для себя рецепты, приготовленные
          вручную, и позвольте аромату нашей страсти к кулинарии наполнить вашу
          кухню
        </p>
      </div>
      <accent-button>изучить рецепты</accent-button>
    </div>
    <div class="main__sections">
      <culinary-chronicle />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import AccentButton from "@/ui/buttons/AccentButton.vue";
import CulinaryChronicle from "@/components/sections/CulinaryChronicle.vue";

export default defineComponent({
  name: "MainView",
  components: {
    AccentButton,
    CulinaryChronicle,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars";

.main {
  display: flex;
  flex-flow: column nowrap;
  margin-top: 16px;

  &__hero {
    background: linear-gradient(rgba(38, 37, 34, 0.6), rgba(38, 37, 34, 0.6)),
      url("@/assets/img/main-hero-bg.svg");
    width: 100%;
    height: 577px;
    border-radius: 32px;
    display: flex;
    flex-flow: column nowrap;
    gap: 40px;
    align-items: center;
    justify-content: center;

    &_wrapper {
      padding: 0px 80px;
      box-sizing: border-box;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: 12px;
    }

    &_title {
      text-transform: uppercase;
      font-family: $second-font;
      font-weight: 800;
      font-size: 70px;
      line-height: 100%;
      letter-spacing: -0.01em;
      color: $main-text-light;
      text-align: center;
    }

    &_text {
      width: 530px;
      text-align: center;
      font-weight: 400;
      font-size: 21px;
      line-height: 140%;
      letter-spacing: 0.01em;
      color: $main-text-light;
    }
  }

  &__sections {
    display: flex;
    flex-flow: column nowrap;
    gap: 64px;
    width: 100%;
    margin-top: 16px;
  }
}
</style>
