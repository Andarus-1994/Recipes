<template>
  <div class="search-wrapper">
    <label>Search:</label>
    <input
      type="text"
      v-model="word"
      v-on="search(word)"
      placeholder="Search by ingredient.."
    />
    <label>Example of search: "salt,eggs,chocolate"</label>
  </div>
</template>

<script>
export default {
  name: "searchBox",
  data: () => {
    return {
      word: "",
    };
  },
  props: {
    search: Function,
  },
};
</script>

<style lang="css" scoped>
.search-wrapper {
  width: 50%;
  font-family: "Roboto", sans-serif;
  margin: 30px auto;
}

.search-wrapper label {
  font-size: 1rem;
  padding: 10px 15px;
  color: rgb(19, 61, 88);
}
.search-wrapper input {
  font-size: 1rem;
  padding: 5px 10px;
  color: rgb(19, 61, 88);
}
</style>
