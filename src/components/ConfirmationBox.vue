<template>
  <div class="confirmationBox">
    <p>
      You are about to delete <u>{{ recipe[0][number].recipe }}</u
      >. <br />
      Are you sure?
    </p>
    <div class="buttons">
      <button @click="deleteRecipe">
        Yes <font-awesome-icon icon="trash" />
      </button>
      <button @click="popDelete">No</button>
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
    popDelete: Function,
  },

  methods: {
    deleteRecipe: function() {
      var localRecipe = JSON.parse(localStorage["recipes"]);
      var deleteRecipe = localRecipe
        .slice(0, this.number)
        .concat(localRecipe.slice(this.number + 1, localRecipe.length));
      localStorage.setItem("recipes", JSON.stringify(deleteRecipe));
      this.recipe[0].splice(this.number, 1);
      this.popDelete();
    },
  },
};
</script>

<style lang="css" scoped>
.confirmationBox {
  position: fixed;
  background: -webkit-linear-gradient(150deg, rgb(17, 79, 117), rgb(5, 43, 58));
  background: linear-gradient(150deg, rgb(17, 79, 117), rgb(5, 43, 58));
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-radius: 15px;
  padding: 0px 25px;
  padding-top: 40px;
  width: 300px;
  height: 200px;
  top: 30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 5px 2px black;
  z-index: 10;
}
.confirmationBox .buttons {
  text-align: center;
  margin: 80px auto;
}
.confirmationBox button {
  position: relative;
  cursor: pointer;
  color: white;
  background-color: rgb(20, 48, 66);
  padding: 10px 25px;
  border: 1px solid rgb(128, 176, 196);
  border-radius: 25px;
  font-family: "Roboto", sans-serif;
  font-size: 0.85rem;
  box-shadow: 0px 0px 1px 0px rgb(209, 227, 241);
  margin: 0 10px;
  transition: 0.6s;
}

.confirmationBox button:nth-of-type(1):hover {
  box-shadow: 0px 0px 8px 0px rgb(46, 136, 221);
}
.confirmationBox button:nth-of-type(2):hover {
  box-shadow: 0px 0px 8px 0px rgb(255, 255, 255);
}
</style>
