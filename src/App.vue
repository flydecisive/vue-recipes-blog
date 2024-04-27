<script>
import { defineComponent } from "vue";
import AppContainer from "./components/AppContainer.vue";
import AppHeader from "./components/AppHeader.vue";
import BottomSection from "@/components/BottomSection.vue";

export default defineComponent({
  components: {
    AppContainer,
    AppHeader,
    BottomSection,
  },
});
</script>

<template>
  <app-container>
    <app-header></app-header>
    <router-view> </router-view>
    <bottom-section></bottom-section>
  </app-container>
</template>

<style scoped></style>
