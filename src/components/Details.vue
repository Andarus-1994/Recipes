<template>
  <div class="details">
    <HeaderDetails
      :decreaseNumber="decreaseNumber"
      :number="number"
      :recipes="allRecipes"
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
    decreaseNumber: Function,
  },
};
</script>

<style lang="css" scoped>
.details {
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  list-style-type: none;
  width: 60%;
  margin: 20px auto;
  box-shadow: 0px 0px 5px 2px black;
}
</style>
