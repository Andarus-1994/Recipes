<template>
  <div class="home">
    <h1>Recipe Box</h1>
    <Loader v-if="recipes.loading" />
    <div class="search-wrapper">
      <label>Search:</label>
      <input type="text" v-model="search" placeholder="Search title.." />
      <label>Example of search: "flour,eggs,chocolate"</label>
    </div>
    <ul v-if="!recipes.loading" class="recipe-list">
      <li
        v-for="(recipe, index) in SearchFilter"
        :key="index"
        v-bind:style="index % 2 === 0 ? li : ''"
        @click="DetailIngredient(index)"
      >
        {{ recipe.recipe }}
      </li>
    </ul>
    <Details :number="number" :recipes="SearchFilter" />
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
    Details
  },
  data: () => {
    return {
      search: "",
      hide: true,
      number:0,
      li: {
        backgroundColor: "rgb(33, 126, 163)",
      },

      itemList: [
        {
          recipe: "Scrambled Eggs",
          ingredients: ["Eggs", "Sunflower Oil"],
          directions: ["Do step 1", "Do step 2"],
        },
        {
          recipe: "Chocolate Cake",
          ingredients: ["Eggs", "Flour", "Milk", "Chocolate"],
          directions: ["Do step 1", "Do step 2", "Do step 3"],
        },
        {
          recipe: "Vanilla Cake",
          ingredients: ["Eggs", "Flour", "Milk", "Vanilla"],
          directions: ["Do step 1", "Do step 2", "Do step 3"],
        },
        {
          recipe: "Scrambled Eggs",
          ingredients: ["Eggs", "Sunflower Oil"],
          directions: ["Do step 1", "Do step 2"],
        },
      ],
      recipes: { loading: true, list: [] },
    };
  },
  created: function() {
    if (localStorage.recipes) {
      /*if we find data into the localstorage we push it to our array */
      this.recipes.list.push(JSON.parse(localStorage.recipes));
      this.recipes.loading = false;
    } else {
      /* if local storage is empty we add a list of recipes*/
      this.recipes.list.push(this.itemList);
      localStorage.setItem("recipes", JSON.stringify(this.itemList));
      this.recipes.loading = false;
    }
    console.log(this.recipes);
  },
  methods: {
    DetailIngredient: function(number) {
      this.number = number;
      console.log(number);
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
  background-color: rgb(28, 63, 116);
  border-radius: 10px;
  border: 5px solid rgb(28, 63, 116);
  overflow: auto;
  list-style-type: none;
  height: 100px;
  width: 50%;
  min-width: 300px;
  padding: 20px 10px;
  margin: 0 auto;
}
.home ul li {
  cursor: pointer;
  padding: 12px 10px;
  margin: 5px 5px;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
}

.home ul li:hover {
  color: rgb(38, 72, 124);
}
</style>
