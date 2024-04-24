<template>
  <button class="button__search"><search-icon></search-icon></button>
</template>

<script>
import SearchIcon from "../../components/icons/SearchIcon.vue";
export default {
  name: "SearchButton",
  components: {
    SearchIcon,
  },
};
</script>

<style scoped lang="scss">
.button {
  &__search {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    border: none;
    background: rgba(38, 37, 34, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
