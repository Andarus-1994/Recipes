<template>
  <div class="change">
    <h2>Modify your recipe...</h2>
    <div class="Inputs">
      <form @submit.prevent="addRecipe">
        <div class="wrapperInput">
          <label>Recipe name:</label>
          <input
            type="text"
            v-model="recipes[0][number].recipe"
            placeholder="Recipe..."
            required
          />
          <label v-if="duplicateError">Recipe already added!</label>
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
      duplicateError: false,
    };
  },
  props: {
    number: Number,
    recipes: Array,
  },

  created: function() {
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
    },
    checkDuplicate: function() {
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
