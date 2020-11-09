<template>
  <div class="details">
    <HeaderDetails
      :increaseNumber="increaseNumber"
      :number="number"
      :totalRecipesLength="allRecipes.length"
      :recipes="recipes"
      :allRecipes="allRecipes"
    />
    <DetailsContent :number="number" :recipes="recipes" />
    <Add :recipes="allRecipes" />
  </div>
</template>

<script>
import Add from "./Add";
import HeaderDetails from "./HeaderDetails";
import DetailsContent from "./DetailsContent";

export default {
  name: "recipeInfor",
  components: {
    DetailsContent,
    HeaderDetails,
    Add,
  },
  props: {
    number: Number,
    recipes: Array,
    allRecipes: Array,
    increaseNumber: Function,
  },
};
</script>

<style lang="css" scoped>
.details {
  background: -webkit-linear-gradient(
    170deg,
    rgb(6, 55, 75),
    rgb(30, 105, 151)
  );
  background: linear-gradient(170deg, rgb(6, 55, 75), rgb(30, 105, 151));
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  list-style-type: none;
  width: 60%;
  margin: 20px auto;
  box-shadow: 0px 0px 5px 2px black;
}
</style>
