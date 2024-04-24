import { createStore } from "vuex";

const store = createStore({
  state: () => {
    return {
      isModalOpen: false,
    };
  },
  mutations: {},
});

export default store;
