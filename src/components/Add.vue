<template>
  <div class="add">
    <button @click="hide = !hide"><font-awesome-icon icon="plus" /></button>
    <div v-if="hide" class="AddTemplate">
      <button @click="hide = !hide" style="float:right">X</button>
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
              placeholder="Ingredients"
              required
            />
          </div>
          <div class="wrapperInput">
            <label>Directions:</label>
            <textarea
              type="text"
              v-model="Directions"
              placeholder="Separate them with '/'            Write Directions"
            />
          </div>
          <input type="submit" value="Add Recipe" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "add",
  props: {
    recipes:Array,
  },
  data: () => {
    return {
      hide: false,
      recipe: { recipe: "", description: "", ingredients: [], directions: [] },
      Ingredients:"",
      Directions:"",
    };
  },
  created: function() {
    console.log("I am here");
    console.log(this.recipes);
  },
  methods: {
    addRecipe: function() {
        var localRecipes
        this.recipe.ingredients = this.Ingredients.trim().split("/");
        this.recipe.directions = this.Directions.trim().split("/");
        if (!localStorage['recipes']) localRecipes = [];
        else localRecipes = JSON.parse(localStorage['recipes']);   
        if (!(localRecipes instanceof Array)) localRecipes = []; 
        localRecipes.push(this.recipe);
        this.recipes[0].push(this.recipe);
       localStorage.setItem("recipes", JSON.stringify(localRecipes));
      console.log("merge");
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
  position: absolute;
  background: rgb(36, 73, 128);
  border: 1px solid black;
  width: 450px;
  top: -500px;
  padding-bottom: 10px;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  box-shadow: 0px 0px 10px 5px black;
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
  background: white;
  border: none;
  padding: 5px;
}

.add .AddTemplate .wrapperInput textarea {
  resize: none;
  padding: 5px;
}
</style>
