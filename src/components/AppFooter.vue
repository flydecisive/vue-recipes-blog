<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <router-link to="/"><app-logo-black /></router-link>

      <ul class="footer__nav">
        <li @click="$router.push('/')" class="footer__nav_item">главная</li>
        <div class="footer__nav_devider"></div>
        <li class="footer__nav_item" @click="$router.push('/recipes')">
          рецепты
        </li>
        <div class="footer__nav_devider"></div>
        <li class="footer__nav_item" @click="$router.push('/tips')">советы</li>
        <div class="footer__nav_devider"></div>
        <li class="footer__nav_item" @click="$router.push('/about')">о нас</li>
      </ul>

      <div class="footer__socials">
        <a href="#" class="footer__socials_link">
          <img src="@/assets/img/socials/tiktok.svg" alt="tiktok" />
        </a>
        <a href="#" class="footer__socials_link">
          <img src="@/assets/img/socials/facebook.svg" alt="facebook" />
        </a>
        <a href="#" class="footer__socials_link">
          <img src="@/assets/img/socials/insta.svg" alt="instagram" />
        </a>
        <a href="#" class="footer__socials_link">
          <img src="@/assets/img/socials/youtube.svg" alt="youtube" />
        </a>
      </div>
    </div>
    <div class="copyright">
      <p class="copyright__text">Copyright: © 2024 Cooks Delight.</p>
    </div>
  </footer>
</template>

<script>
import AppLogoBlack from "@/components/icons/AppLogoBlack.vue";

export default {
  name: "AppFooter",
  components: {
    AppLogoBlack,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.footer {
  width: 100%;
  background: $dark;
  padding: 0px 40px;
  box-sizing: border-box;
  border-radius: 32px;

  &__wrapper {
    padding: 24px 0px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(240, 235, 225, 0.08);
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 32px;
    margin: 0 auto;
    color: $main-text-light;
    list-style-type: none;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 100%;
    font-weight: 500;

    &_devider {
      width: 0px;
      height: 16px;
      border: 1px solid rgba(240, 235, 225, 0.08);
    }

    &_item {
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
        color: #f29c33;
      }
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 16px;

    &_link {
      width: 24px;
      height: 24px;
      border: 1px solid transparent;
      border-radius: 4px;
      transition: all 0.3s;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &:hover {
        border: 1px solid rgba(240, 235, 225, 0.08);
      }
    }
  }
}

.copyright {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 24px;

  &__text {
    font-size: 12px;
    line-height: 120%;
    letter-spacing: 0.01em;
    font-weight: 500;
    color: rgba(240, 235, 225, 0.6);
    text-transform: uppercase;
  }
}
</style>
