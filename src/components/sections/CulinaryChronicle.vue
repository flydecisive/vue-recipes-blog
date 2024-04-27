<template>
  <section class="chronicle">
    <div class="chronicle__content">
      <div class="chronicle__content_wrapper">
        <section-label :text="'о нас'" />
        <h3 class="chronicle__content_title">наша кулинарная хроника</h3>
        <p class="chronicle__content_text">
          Наше путешествие основано на самоотдаче, творческом подходе и
          неизменном стремлении к получению восхитительных кулинарных
          впечатлений. Присоединяйтесь к нам.
        </p>
        <transparent-button :text="'читать'" />
      </div>
    </div>
    <div class="chronicle__img-small">
      <img src="@/assets/img/culinary-chronicle/card-small.svg" alt="recipe" />
    </div>
    <div class="chronicle__img-vertical">
      <img
        src="@/assets/img/culinary-chronicle/card-vertical.svg"
        alt="recipe"
      />
    </div>
    <div class="chronicle__img-horizontal">
      <img
        src="@/assets/img/culinary-chronicle/card-horizontal.svg"
        alt="recipe"
      />
    </div>
  </section>
</template>

<script>
import SectionLabel from "@/ui/SectionLabel.vue";
import TransparentButton from "@/ui/buttons/TransparentButton.vue";

export default {
  name: "CulinaryChronicle",
  components: {
    SectionLabel,
    TransparentButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars";

.chronicle {
  padding: 16px;
  box-sizing: border-box;
  border-radius: 32px;
  border: 1px solid rgba(38, 37, 34, 0.24);
  display: grid;
  grid-template-columns: 1fr 316px 411px;
  grid-template-rows: 326px 331px;
  gap: 8px;

  &__content {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    &_wrapper {
      display: flex;
      flex-flow: column nowrap;
      gap: 12px;
      width: 90%;
    }

    &_title {
      color: $dark;
      font-weight: 700;
      font-size: 40px;
      line-height: 100%;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      font-family: $second-font;
    }

    &_text {
      font-weight: 300;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0.01em;
      color: rgba(38, 37, 34, 0.8);
    }
  }

  &__img {
    border-radius: 24px;
    widows: 100%;
    height: 100%;

    &-vertical {
      grid-row: span 2;
    }

    &-horizontal {
      grid-column: span 2;
    }
  }
}
</style>
