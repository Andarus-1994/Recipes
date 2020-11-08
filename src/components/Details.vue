<template>
  <div class="details">
    <Modify :number="number" :recipes="allRecipes" />
    <DetailsContent :number="number" :recipes="recipes" />
    <Add :recipes="allRecipes" />
  </div>
</template>

<script>
import Add from "./Add";
import Modify from "./Modify";
import DetailsContent from "./DetailsContent";

export default {
  name: "recipeInfor",
  components: {
    DetailsContent,
    Modify,
    Add,
  },
  props: {
    number: Number,
    recipes: Array,
    allRecipes: Array,
  },
};
</script>

<style lang="css" scoped>
.details {
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  list-style-type: none;
  width: 60%;
  min-width: 300px;
  margin: 20px auto;
  box-shadow: 0px 0px 5px 2px black;
}
</style>
