<template>
  <div class="change">
    <button @click="Close" style="float: right">X</button>
    <h2>Modify your recipe...</h2>
    <div class="Inputs">
      <form @submit.prevent="changeRecipe">
        <div class="wrapperInput">
          <label>Recipe name:</label>
          <input
            type="text"
            v-model="recipes[0][number].recipe"
            placeholder="Recipe..."
            required
          />
        </div>
        <div class="wrapperInput">
          <label>Description:</label>
          <textarea
            type="text"
            v-model="recipes[0][number].description"
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
        <input type="submit" value="Change values" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "change",

  data: () => {
    return {
      Ingredients: "",
      Directions: "",
      initialRecipe: {
        recipe: "",
        description: "",
        ingredients: [],
        directions: [],
      },
    };
  },
  props: {
    number: Number,
    recipes: Array,
    popChange: Function,
  },

  created: function () {
    /* replaced the comma with a "/" in ingredients and directions in order to display them to the user (they are in an UL displayed) */
    this.Ingredients = this.recipes[0][this.number].ingredients
      .toString()
      .replace(/,/g, "/");
    this.Directions = this.recipes[0][this.number].directions
      .toString()
      .replace(/,/g, "/");
    /* here we save the initial recipe in case the user doesn't want to make a change anymore */
    this.initialRecipe.recipe = this.recipes[0][this.number].recipe;
    this.initialRecipe.description = this.recipes[0][this.number].description;
    this.initialRecipe.ingredients = this.recipes[0][this.number].ingredients;
    this.initialRecipe.directions = this.recipes[0][this.number].directions;
  },
  methods: {
    changeRecipe: function () {
      var localRecipes;
      this.recipes[0][this.number].ingredients = this.Ingredients.trim().split(
        "/"
      );
      this.recipes[0][this.number].directions = this.Directions.trim().split(
        "/"
      );

      if (!localStorage["recipes"]) localRecipes = [];
      else localRecipes = JSON.parse(localStorage["recipes"]);
      if (!(localRecipes instanceof Array)) localRecipes = [];
      localRecipes[this.number] = this.recipes[0][this.number];
      localStorage.setItem("recipes", JSON.stringify(localRecipes));
      this.popChange();
    },
    Close: function () {
      /* here we assign the initial values and close the form */
      this.recipes[0][this.number].recipe = this.initialRecipe.recipe;
      this.recipes[0][this.number].description = this.initialRecipe.description;
      this.recipes[0][this.number].ingredients = this.initialRecipe.ingredients;
      this.recipes[0][this.number].directions = this.initialRecipe.directions;
      this.popChange();
    },
  },
};
</script>

<style lang="css" scoped>
.change {
  position: fixed;
  background: -webkit-linear-gradient(150deg, rgb(17, 79, 117), rgb(5, 43, 58));
  background: linear-gradient(150deg, rgb(17, 79, 117), rgb(5, 43, 58));
  padding: 30px 40px;
  width: 400px;
  top: 25%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  text-align: center;
}

.change button {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  font-size: 1rem;
  background-color: rgb(17, 79, 117);
  border: none;
  border-left: 1px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(0, 0, 0);
  transition: 0.6s;
}
.change button:hover {
  background-color: rgb(29, 106, 155);
}

.change .wrapperInput {
  margin: 15px 40px;
  display: flex;
  flex-direction: column;
}
.change .wrapperInput label {
  font-size: 1.2rem;
}
.change .wrapperInput input {
  font-family: "Roboto";
  color: white;
  background: rgb(16, 50, 94);
  border: 1px solid rgb(15, 28, 44);
  padding: 5px;
}

.change .wrapperInput textarea {
  font-family: "Roboto";
  font-size: 0.85rem;
  color: rgb(255, 255, 255);
  background: rgb(19, 52, 97);
  border: 1px solid rgb(15, 28, 44);
  resize: none;
  padding: 5px;
}

.change input[type="submit"] {
  cursor: pointer;
  background-color: rgb(17, 79, 117);
  color: rgb(217, 226, 255);
  font-family: "Roboto";
  padding: 10px 20px;
  border: none;
}
</style>
