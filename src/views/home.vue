<template>
  <div class="home">
    <h1>Recipe Box</h1>
    <SearchBox :search="SearchWord" />
    <Loader v-if="recipes.loading" />
    <RecipeList
      :loading="recipes.loading"
      :recipes="SearchFilter"
      :selectedRecipeIndex="DetailIngredient"
    />
    <Details
      v-if="!recipes.loading"
      :number="number"
      :increaseNumber="IncreaseNumber"
      :recipes="SearchFilter"
      :allRecipes="recipes.list"
    />
  </div>
</template>

<script>
import Loader from "../components/Spinner.vue";
import Details from "../components/Details.vue";
import RecipeList from "../components/RecipeList.vue";
import SearchBox from "../components/Search.vue";
export default {
  name: "home",
  components: {
    Loader,
    Details,
    RecipeList,
    SearchBox,
  },
  data: () => {
    return {
      search: "",
      hide: true,
      /* I use this to keep the track on selected recipe index */
      number: 0,
      /* Here is an item list that I use as example in case the Recipe Storage is empty */
      itemList: [
        {
          recipe: "Scrambled Eggs",
          description:
            "Scrambled eggs is a dish made from eggs (usually chicken eggs) stirred or beaten together while being gently heated, typically with salt, butter and sometimes other ingredients.",
          ingredients: [
            "4 large EGGS",
            "Sunflower Oil",
            "1 pinch salt",
            "1 pinch pepper",
          ],
          directions: ["Do step 1", "Do step 2"],
        },
        {
          recipe: "Chocolate Cake",
          description:
            "Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both.",
          ingredients: ["Eggs", "Flour", "Milk", "Chocolate"],
          directions: ["Do step 1", "Do step 2", "Do step 3"],
        },
        {
          recipe: "Vanilla Cake",
          description:
            "Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both.",
          ingredients: ["Eggs", "Flour", "Milk", "Vanilla"],
          directions: ["Do step 1", "Do step 2", "Do step 3"],
        },
        {
          recipe: "CheeseCake",
          description:
            "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar.",
          ingredients: [
            "2 large EGGS",
            "Four 8-ounce blocks of full-fat cream",
            "300g Sour Cream",
            "50g Sugar",
          ],
          directions: ["Do step 1", "Do step 2"],
        },
      ],
      recipes: { loading: true, list: [] },
    };
  },
  created: function() {
    if (localStorage.recipes) {
      /*if we find data into the local storage we push it to our array */
      this.recipes.list.push(JSON.parse(localStorage.recipes));
      this.recipes.loading = false;
    } else {
      /* if local storage is empty we add a list of recipes*/
      this.recipes.list.push(this.itemList);
      localStorage.setItem("recipes", JSON.stringify(this.itemList));
      this.recipes.loading = false;
    }
  },

  methods: {
    DetailIngredient: function(index) {
      this.number = index;
    },
    Hide: function() {
      this.hide = !this.hide;
    },
    SearchWord: function(word) {
      this.search = word;
    },
    IncreaseNumber: function(x) {
      this.number = this.number + x;
    },
  },
  computed: {
    SearchFilter: function() {
      /* If the search input is empty we return the entire list */
      if (!this.search) {
        return this.recipes.list[0];
      }
      return this.recipes.list[0].filter((recipe) => {
        /* splited the words separated by a comma */
        var searchedIngredients = this.search.trim().split(",");
        var ingredients = recipe.ingredients;
        for (var i = 0; i < ingredients.length; i++) {
          for (var y = 0; y < searchedIngredients.length; y++) {
            if (
              searchedIngredients[y] &&
              ingredients[i]
                .toLowerCase()
                .includes(searchedIngredients[y].trim())
            ) {
              return true;
            }
          }
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.home {
  position: relative;
  color: rgb(255, 255, 255);
}
.home h1 {
  text-align: center;
  font-size: 4rem;
  font-family: "Lobster", cursive;
}
</style>
