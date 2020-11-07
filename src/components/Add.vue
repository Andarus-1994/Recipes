<template>
  <div class="add">
    <button @click="(hide = !hide), (recipe = {})">
      <font-awesome-icon icon="plus" />
    </button>
    <div v-if="hide" class="AddTemplate">
      <button @click="hide = !hide" style="float: right">X</button>
      <h2>New Recipe</h2>
      <div class="Inputs">
        <form @submit.prevent="addRecipe">
          <div class="wrapperInput">
            <label>Recipe name:</label>
            <input
              type="text"
              v-model="recipe.recipe"
              placeholder="Recipe..."
              required
            />
            <label v-if="duplicateError">Recipe already added!</label>
          </div>
          <div class="wrapperInput">
            <label>Description:</label>
            <textarea
              type="text"
              v-model="recipe.description"
              placeholder="Description..."
              required
            />
          </div>
          <div class="wrapperInput">
            <label>Ingredients:</label>
            <textarea
              type="text"
              v-model="Ingredients"
              placeholder="Separate them with '/'                      Write Ingredients"
              required
            />
          </div>
          <div class="wrapperInput">
            <label>Directions:</label>
            <textarea
              type="text"
              v-model="Directions"
              placeholder="Separate them with '/'                    Write Directions"
              required
            />
          </div>
          <Loader v-if="loadOn" />
          <input type="submit" value="Add Recipe" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./Spinner.vue";
export default {
  name: "add",
  props: {
    recipes: Array,
  },
  data: () => {
    return {
      hide: false,
      loadOn: false,
      recipe: { recipe: "", description: "", ingredients: [], directions: [] },
      duplicateError: false,
      Ingredients: "",
      Directions: "",
    };
  },
  components: {
    Loader,
  },
  created: function () {
    console.log(this.recipes[0].length);
  },
  methods: {
    addRecipe: function () {
      this.checkDuplicate();
      if (!this.duplicateError) {
        var localRecipes;
        this.recipe.ingredients = this.Ingredients.trim().split("/");
        this.recipe.directions = this.Directions.trim().split("/");
        if (!localStorage["recipes"]) localRecipes = [];
        else localRecipes = JSON.parse(localStorage["recipes"]);
        if (!(localRecipes instanceof Array)) localRecipes = [];
        localRecipes.push(this.recipe);
        this.recipes[0].push(this.recipe);
        localStorage.setItem("recipes", JSON.stringify(localRecipes));
        this.loadOn = true;
        this.recipe = {};
        setTimeout(() => {
          (this.hide = false), (this.loadOn = false);
        }, 500);
      }
    },
    checkDuplicate: function () {
      this.duplicateError = false;
      for (var i = 0; i < this.recipes[0].length; i++) {
        if (this.recipe.recipe === this.recipes[0][i].recipe) {
          this.duplicateError = true;
          break;
        }
      }
    },
  },
};
</script>

<style lang="css" scoped>
.add {
  position: relative;
  background: rgb(9, 17, 20);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px;
}

.add button {
  position: relative;
  background-color: rgb(33, 126, 163);
  cursor: pointer;
  border: 1px solid black;
  padding: 5px 10px;
  font-size: 1rem;
}
.add button:active {
  top: 1px;
  bottom: 1px;
}
.add .AddTemplate {
  position: fixed;
  background: -webkit-linear-gradient(150deg, rgb(17, 79, 117), rgb(5, 43, 58));
  background: linear-gradient(150deg, rgb(17, 79, 117), rgb(5, 43, 58));
  padding: 30px 40px;
  border: 1px solid black;
  width: 400px;
  top: 20%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  text-align: center;
}
.add .AddTemplate .wrapperInput {
  margin: 15px 40px;
  display: flex;
  flex-direction: column;
}
.add .AddTemplate .wrapperInput label {
  font-size: 1.2rem;
}
.add .AddTemplate .wrapperInput input {
  font-family: "Roboto";
  color: white;
  background: rgb(24, 74, 116);
  border: 1px solid rgb(15, 28, 44);
  padding: 5px;
  transition: 0.4s;
}
.add .AddTemplate .wrapperInput input:focus {
  background: rgb(32, 96, 148);
  border: 1px solid rgb(0, 0, 0);
}

.add .AddTemplate .wrapperInput textarea {
  font-family: "Roboto";
  font-size: 0.85rem;
  color: rgb(255, 255, 255);
  background: rgb(24, 74, 116);
  border: 1px solid rgb(15, 28, 44);
  resize: none;
  padding: 5px;
  transition: 0.4s;
}
.add .AddTemplate .wrapperInput textarea:focus {
  background: rgb(32, 96, 148);
  border: 1px solid rgb(0, 0, 0);
}
.add .AddTemplate button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgb(17, 79, 117);
  border: none;
  border-left: 1px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(0, 0, 0);
  transition: 0.6s;
}
.add .AddTemplate button:hover {
  background-color: rgb(29, 106, 155);
}
.add .AddTemplate input[type="submit"] {
  cursor: pointer;
  background-color: rgb(17, 79, 117);
  color: rgb(217, 226, 255);
  font-family: "Roboto";
  padding: 10px 20px;
  border: none;
  transition: 0.4s;
}
.add .AddTemplate input[type="submit"]:hover {
  background-color: rgb(25, 111, 165);
}
</style>
