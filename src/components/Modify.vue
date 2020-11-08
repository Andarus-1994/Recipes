<template>
  <div class="modify">
    <button @click="popChangeBox"><font-awesome-icon icon="edit" /></button>
    <button @click="addRandomRecipe" title="Random Autocompleted Recipe">
      <font-awesome-icon icon="list-ol" />
    </button>
    <button @click="popDeleteConfirmation">
      <font-awesome-icon icon="trash" />
    </button>
    <transition name="fade">
      <Change
        v-if="!hide.modify"
        :popChange="popChangeBox"
        :recipes="recipes"
        :number="number"
      />

      <ConfirmationBox
        v-if="!hide.delete"
        :confirmation="confirm"
        :recipe="recipes"
        :number="number"
        :popDelete="popDeleteConfirmation"
      />
    </transition>
  </div>
</template>

<script>
import ConfirmationBox from "./ConfirmationBox";
import Change from "./Change";
import axios from "axios";

export default {
  name: "modify",
  data: () => {
    return {
      hide: { modify: true, delete: true },
      confirm: false,
      mockedRecipes: [],
    };
  },
  components: {
    ConfirmationBox,
    Change,
  },

  props: {
    number: Number,
    recipes: Array,
  },
  created: function () {
    axios
      .get("/api/recipes", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => (this.mockedRecipes = response.data.recipes))
      .catch((error) => console.log(error));
  },
  methods: {
    popDeleteConfirmation: function () {
      this.hide.delete = !this.hide.delete;
    },
    popChangeBox: function () {
      this.hide.modify = !this.hide.modify;
    },

    addRandomRecipe: function () {
      if (this.mockedRecipes.length > 0) {
        var localRecipes;
        /* n is a random number from 0 to the lenght of the array that gets fetched from  the mocked API */
        var n = Math.floor(Math.random() * this.mockedRecipes.length);
        this.recipes[0].push(this.mockedRecipes[n]);
        if (!localStorage["recipes"]) localRecipes = [];
        else localRecipes = JSON.parse(localStorage["recipes"]);
        if (!(localRecipes instanceof Array)) localRecipes = [];
        localRecipes.push(this.mockedRecipes[n]);
        localStorage.setItem("recipes", JSON.stringify(localRecipes));
        console.log(n);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.modify {
  background-color: rgb(9, 17, 20);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
}
.modify button {
  position: relative;
  margin: 0px 5px;
  background-color: rgb(29, 107, 138);
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  transition: 0.6s;
}
.modify button:nth-last-of-type(1) {
  float: right;
  color: rgb(255, 255, 255);
}

.modify button:nth-last-of-type(2):hover {
  color: rgb(255, 255, 255);
}
.modify button:nth-last-of-type(1):hover {
  transform: scale(1.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
