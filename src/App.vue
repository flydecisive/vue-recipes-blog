<script>
import { defineComponent } from "vue";
import AppContainer from "./components/AppContainer.vue";
import AppHeader from "./components/AppHeader.vue";

export default defineComponent({
  components: {
    AppContainer,
    AppHeader,
  },
});
</script>

<template>
  <app-container>
    <app-header></app-header>
    <router-view></router-view>
  </app-container>
</template>

<style scoped></style>
