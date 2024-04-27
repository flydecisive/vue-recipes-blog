<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        @click="$router.push('/')"
        :class="path === '/' ? 'nav__item nav__item-active' : 'nav__item'"
      >
        главная
      </li>
      <li
        :class="
          path === '/recipes' ? 'nav__item nav__item-active' : 'nav__item'
        "
        @click="$router.push('/recipes')"
      >
        рецепты
      </li>
      <li
        :class="path === '/tips' ? 'nav__item nav__item-active' : 'nav__item'"
        @click="$router.push('/tips')"
      >
        советы
      </li>
      <li
        :class="path === '/about' ? 'nav__item nav__item-active' : 'nav__item'"
        @click="$router.push('/about')"
      >
        о нас
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNav",
  data() {
    return {
      path: {
        type: String,
        default: "/",
      },
    };
  },
  watch: {
    $route() {
      this.path = this.$route.path;
    },
  },
});
</script>

<style scoped lang="scss">
@import "../assets/styles/vars";

.nav {
  margin: 0 auto;

  &__list {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__item {
    text-transform: uppercase;
    color: $dark;
    opacity: 0.4;
    transition: all 0.3s;
    border-bottom: 4px solid transparent;
    padding: 8px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 100%;
    font-weight: 500;

    &-active {
      opacity: 1;
      border-color: $accent-3;
    }

    &:hover {
      cursor: pointer;
      opacity: 1;
      border-color: $accent-3;
    }
  }
}
</style>
