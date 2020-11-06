<template>
  <div class="confirmationBox">
    <p>
      You are about to delete <u>{{ recipe[0][number].recipe }}</u
      >. <br />
      Are you sure about this?
    </p>
    <div class="buttons">
      <button @click="deleteRecipe">Yes</button>
      <button @click="deleteFunction">No</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirmationBox",

  props: {
    confirmation: Boolean,
    recipe: Array,
    number: Number,
    deleteFunction: Function,
  },

  methods: {
    deleteRecipe: function() {
      var localRecipe = JSON.parse(localStorage["recipes"]);
      var deleteRecipe = localRecipe
        .slice(0, this.number)
        .concat(localRecipe.slice(this.number + 1, localRecipe.length));
      localStorage.setItem("recipes", JSON.stringify(deleteRecipe));
      this.recipe[0].splice(this.number, 1);
      this.deleteFunction();
      console.log("Delete!");
    },
  },
};
</script>

<style lang="css" scoped>
.confirmationBox {
  position: fixed;
  background-color: rgb(26, 106, 160);
  font-size: 1.2rem;
  border: 1px solid black;
  border-radius: 15px;
  padding: 20px 25px;
  width: 300px;
  height: 200px;
  top: 30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
}
.confirmationBox .buttons {
  text-align: center;
  margin: 60px auto;
}
.confirmationBox button {
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  margin: 0 10px;
}
</style>
