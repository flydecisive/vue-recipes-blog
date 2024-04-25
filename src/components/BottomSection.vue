<template>
  <section class="bottom">
    <div class="subscribe">
      <div class="subscribe__wrapper">
        <h3 class="subscribe__subtitle">subscribe</h3>
        <h2 class="subscribe__title">
          Присоединяйтесь к веселью, подпишитесь прямо сейчас!
        </h2>
        <p class="subscribe__text">
          Подпишитесь на нашу новостную рассылку, чтобы получать еженедельные
          рецепты, кулинарные советы и эксклюзивную информацию прямо на свой
          почтовый ящик.
        </p>
      </div>

      <div class="subscribe__form">
        <input
          type="text"
          class="subscribe__form_input"
          placeholder="Email адрес"
        />
        <primary-dark-button>подписаться</primary-dark-button>
      </div>
    </div>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import PrimaryDarkButton from "@/ui/buttons/PrimaryDarkButton.vue";

export default {
  name: "BottomSection",
  components: {
    AppFooter,
    PrimaryDarkButton,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.bottom {
  margin-top: 64px;
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
}

.subscribe {
  background: $primary-color-3;
  border-radius: 32px;
  padding: 64px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 48px;

  &__wrapper {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    gap: 12px;
  }

  &__subtitle {
    text-transform: uppercase;
    color: rgba(255, 251, 242, 0.8);
    font-size: 18px;
    line-height: 100%;
    font-weight: 500;
  }

  &__title {
    width: 1076px;
    color: $main-text-light;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    font-weight: 800;
    line-height: 100%;
    font-size: 70px;
    font-family: $second-font;
  }

  &__text {
    font-size: 21px;
    line-height: 140%;
    letter-spacing: 0.01em;
    text-align: center;
    color: $main-text-light;
    font-weight: 400;
    width: 648px;
  }

  &__form {
    border-radius: 24px;
    background: $main-text-light;
    padding: 6px 8px;
    padding-left: 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    &_input {
      background: transparent;
      font-size: 21px;
      line-height: 114%;
      letter-spacing: 0.01em;
      font-weight: 400;
      color: $dark;
      border: none;

      &:focus {
        border: none;
        outline: none;
      }

      &:hover {
        cursor: pointer;
      }

      &:placeholder {
        color: rgba(38, 37, 34, 0.4);
      }
    }
  }
}
</style>
