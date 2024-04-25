import { createStore } from "vuex";

const store = createStore({
  state: () => {
    return {
      isModalOpen: false,
      isAuth: false,
    };
  },
  mutations: {
    setIsModalOpen(state, value) {
      state.isModalOpen = value;
    },
  },
});

export default store;
