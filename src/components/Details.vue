<template>
  <div class="details">
      
    <h1>{{ recipes[number].recipe }}</h1>
     
    <div>
      <ul>
        <h1>Ingredients:</h1>
        <li
          v-for="(ingredient, index) in recipes[number].ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>
      <ul>
        <h1>Directions</h1>
        <li
          v-for="(direction, index) in recipes[number].directions"
          :key="index"
        >
          {{ direction }}
        </li>
      </ul>
    </div>
     <Add :recipes="allRecipes" />
  </div>
</template>

<script>
import Add from "./Add";

export default {
  name: "recipeInfor",
    components: {
    Add
  },
  props: {
    number: Number,
    recipes: Array,
    allRecipes:Array,
  },
  created: function() {
    console.log(this.recipes[this.number]);
  },
};
</script>

<style lang="css" scoped>
.details {
  
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  list-style-type: none;
  width: 51%;
  min-width: 300px;
  padding-top:20px;
  margin: 20px auto;
  box-shadow: 0px 0px 5px 2px black;
}

.details h1{
    margin: 5px 10px;
}

.details ul{
    list-style-type: none;
    margin:30px 0;
}
.details ul:nth-of-type(2){
    list-style-type: decimal;
}
</style>
