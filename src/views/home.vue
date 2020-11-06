<template>
  <div class="home">
    <h1>Recipe Box</h1>
    <div class="search-wrapper">
      <label>Search:</label>
      <input type="text" v-model="search" placeholder="Search title.." />
      <label>Example of search: "flour,eggs,chocolate"</label>
    </div>
    <Loader v-if="recipes.loading" />
    <ul v-if="!recipes.loading" class="recipe-list">
      <li
        v-for="(recipe, index) in SearchFilter"
        :key="index"
        @click="DetailIngredient(index)"
      >
        <h3>{{ recipe.recipe }}</h3>
        <p>{{ recipe.description }}</p>
      </li>
    </ul>
    <Details
      :number="number"
      :recipes="SearchFilter"
      :allRecipes="recipes.list"
    />
    <div class="buttons">
      <button v-on:click="Hide">X</button>
      <div v-if="hide">Buna treaba!</div>
    </div>
  </div>
</template>

<script>
import Loader from "../components/Spinner.vue";
import Details from "../components/Details.vue";

export default {
  name: "home",
  components: {
    Loader,
    Details,
  },
  data: () => {
    return {
      search: "",
      hide: true,
      number: 0,

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
          recipe: "Scrambled Eggs",
          description: "Eggs are prepared at home usually.",
          ingredients: ["Eggs", "Sunflower Oil"],
          directions: ["Do step 1", "Do step 2"],
        },
      ],
      recipes: { loading: true, list: [] },
    };
  },
  created: function() {
    if (JSON.parse(localStorage.recipes).length) {
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
    DetailIngredient: function(number) {
      this.number = number;
    },
    Hide: function() {
      this.hide = !this.hide;
    },
  },
  computed: {
    SearchFilter: function() {
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
.home .search-wrapper {
  width: 50%;
  font-family: "Roboto", sans-serif;
  margin: 30px auto;
}

.home .search-wrapper label {
  font-size: 1rem;
  padding: 10px 15px;
  color: rgb(19, 61, 88);
}
.home .search-wrapper input {
  font-size: 1rem;
  padding: 5px 10px;
  color: rgb(19, 61, 88);
}

.home ul {
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
.home ul li {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  padding: 5px 20px;
  min-height: 200px;
  margin: 0px 5px;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 0px 2px 0px black;
  transition: 0.6s;
}

.home ul li:hover {
  color: rgb(38, 72, 124);
  box-shadow: inset 0px 0px 6px black;
}
.home ul li h3 {
  font-size: 1.3rem;
}
</style>
