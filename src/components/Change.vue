<template>
  <div class="change">
    <button @click="popChange" style="float: right">X</button>
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
    };
  },
  props: {
    number: Number,
    recipes: Array,
    popChange: Function,
  },

  created: function() {
    console.log(this.recipes[0]);
    this.Ingredients = this.recipes[0][this.number].ingredients
      .toString()
      .replace(/,/g, "/");
    this.Directions = this.recipes[0][this.number].directions
      .toString()
      .replace(/,/g, "/");
    console.log(this.Ingredients);
  },
  methods: {
    changeRecipe: function() {
      console.log("ready!");
      var localRecipes;
      this.recipes[0][this.number].ingredients = this.Ingredients.trim().split(
        "/"
      );
      this.recipes[0][this.number].directions = this.Directions.trim().split(
        "/"
      );
      this.recipes[0][this.number] = this.recipes[0][this.number];
      if (!localStorage["recipes"]) localRecipes = [];
      else localRecipes = JSON.parse(localStorage["recipes"]);
      if (!(localRecipes instanceof Array)) localRecipes = [];
      localRecipes[this.number] = this.recipes[0][this.number];
      localStorage.setItem("recipes", JSON.stringify(localRecipes));
      this.popChange();
    },
  },
};
</script>

<style lang="css" scoped>
.change {
  position: fixed;
  background: rgb(54, 86, 155);
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

.change .wrapperInput {
  margin: 15px 40px;
  display: flex;
  flex-direction: column;
}
.change .wrapperInput label {
  font-size: 1.2rem;
}
.change .wrapperInput input {
  background: white;
  border: none;
  padding: 5px;
}

.change .wrapperInput textarea {
  resize: none;
  padding: 5px;
}
</style>
