import MainView from "@/views/MainView.vue";
import RecipesView from "@/views/RecipesView.vue";
import TipsView from "@/views/TipsView.vue";
import AboutView from "@/views/AboutView.vue";
import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/recipes",
    component: RecipesView,
  },
  {
    path: "/tips",
    component: TipsView,
  },
  {
    path: "/about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
