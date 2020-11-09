<template>
  <div class="recipeList">
    <ul v-if="!loading" class="recipe-list">
      <h1 v-if="!this.recipes[0]">Recipe list is empty</h1>
      <li
        v-for="(recipe, index) in recipes"
        :key="index"
        @click="selectedRecipeIndex(index)"
      >
        <h3>{{ recipe.recipe }}</h3>
        <p>{{ recipe.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recipeList",
  props: {
    loading: Boolean,
    recipes: Array,
    selectedRecipeIndex: Function,
  },
};
</script>

<style lang="css" scoped>
.recipeList ul {
  background-color: rgb(37, 129, 165);
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  list-style-type: none;
  overflow: auto;
  height: 200px;
  width: 60%;
  min-width: 400px;
  padding: 30px 10px;
  margin: 0 auto;
  box-shadow: 0px 0px 2px 0px black;
}
.recipeList ul h1 {
  color: rgb(21, 59, 82);
  text-align: center;
  margin-top: 100px;
  font-family: "Roboto";
  font-size: 1.2rem;
}
.recipeList ul li {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  padding: 5px 20px;
  margin: 0px 5px;
  max-width: 400px;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 0px 2px 0px black;
  transition: 0.6s;
}

.recipeList ul li:hover {
  color: rgb(38, 72, 124);
  box-shadow: inset 0px 0px 6px black;
}
.recipeList ul li h3 {
  font-size: 1rem;
  color: rgb(239, 244, 255);
}
</style>
