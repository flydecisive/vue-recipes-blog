<template>
  <Transition>
    <div class="auth">
      <div class="auth__cross" @click="closeModal()"><cross-icon /></div>
      <h3 class="auth__title">{{ auth ? "Авторизация" : "Регистрация" }}</h3>
      <div class="auth__inputs">
        <auth-input label="Логин" placeholder="Введите логин" />
        <auth-input
          label="Пароль"
          placeholder="Введите пароль"
          inputType="password"
        />
        <auth-input
          label="Повторите пароль"
          placeholder="Введите пароль повторно"
          inputType="password"
          v-if="!auth"
        />
      </div>
      <div class="auth__buttons">
        <accent-button v-if="auth">Войти</accent-button>
        <primary-dark-button @click="toggleModal()" v-if="auth"
          >Зарегистрироваться</primary-dark-button
        >
        <accent-button v-if="!auth">Зарегистрироваться</accent-button>
      </div>
    </div>
  </Transition>
</template>

<script>
import AccentButton from "@/ui/buttons/AccentButton.vue";
import PrimaryDarkButton from "@/ui/buttons/PrimaryDarkButton.vue";
import AuthInput from "@/ui/inputs/AuthInput.vue";
import CrossIcon from "@/components/icons/CrossIcon.vue";

export default {
  name: "AuthModal",
  components: {
    AccentButton,
    PrimaryDarkButton,
    AuthInput,
    CrossIcon,
  },
  data() {
    return {
      auth: true,
    };
  },
  methods: {
    toggleModal() {
      this.auth = false;
    },
    closeModal() {
      this.$emit("close", false);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars";

.auth {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 24px;
  width: 500px;
  position: relative;

  &__title {
    font-size: 36px;
    line-height: 110%;
    color: $dark;
    font-weight: 800;
  }

  &__inputs,
  &__buttons {
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
    width: 100%;
  }

  &__cross {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
