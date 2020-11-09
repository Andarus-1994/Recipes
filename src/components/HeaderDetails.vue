<template>
  <div class="modify">
    <button @click="popChangeBox" :disabled="recipes.length ? false : true">
      <font-awesome-icon icon="edit" />
    </button>
    <button @click="addRandomRecipe" title="Random Autocompleted Recipe">
      <font-awesome-icon icon="list-ol" />
    </button>
    <button
      :disabled="recipes.length ? false : true"
      @click="popDeleteConfirmation"
    >
      <font-awesome-icon icon="trash" />
    </button>
    <transition name="fade">
      <EditForm
        v-if="!hide.edit"
        :popChange="popChangeBox"
        :recipes="recipes"
        :number="number"
      />

      <ConfirmationBox
        v-if="!hide.delete"
        :recipe="recipes"
        :increaseNumber="increaseNumber"
        :number="number"
        :popDelete="popDeleteConfirmation"
        :allRecipes="allRecipes"
      />
    </transition>
  </div>
</template>

<script>
import ConfirmationBox from "./ConfirmationBox";
import EditForm from "./EditForm";
import axios from "axios";

export default {
  name: "headerDetails",
  data: () => {
    return {
      hide: { edit: true, delete: true },

      mockedRecipes: [],
    };
  },
  components: {
    ConfirmationBox,
    EditForm,
  },

  props: {
    number: Number,
    recipes: Array,
    increaseNumber: Function,
    allRecipes: Array,
  },
  created: function() {
    axios
      .get("/api/recipes", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => (this.mockedRecipes = response.data.recipes))
      .catch((error) => console.log(error));
  },
  methods: {
    popDeleteConfirmation: function() {
      if (!this.hide.edit) this.hide.edit = true;
      this.hide.delete = !this.hide.delete;
    },
    popChangeBox: function() {
      if (!this.hide.delete) this.hide.delete = true;
      this.hide.edit = !this.hide.edit;
    },

    addRandomRecipe: function() {
      if (this.mockedRecipes.length > 0) {
        var localRecipes;
        /* n is a random number from 0 to the lenght of the array that gets fetched from  the mocked API */
        var n = Math.floor(Math.random() * this.mockedRecipes.length);
        this.recipes.push(this.mockedRecipes[n]);
        if (!localStorage["recipes"]) localRecipes = [];
        else localRecipes = JSON.parse(localStorage["recipes"]);
        if (!(localRecipes instanceof Array)) localRecipes = [];
        localRecipes.push(this.mockedRecipes[n]);
        localStorage.setItem("recipes", JSON.stringify(localRecipes));
        this.increaseNumber(1);
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

.modify button:nth-last-of-type(1):disabled {
  cursor: not-allowed;
  background-color: grey;
  color: rgb(71, 71, 71);
}
.modify button:nth-last-of-type(1):disabled:hover {
  transform: scale(1);
}
.modify button:nth-last-of-type(2):disabled {
  cursor: not-allowed;
  background-color: grey;
  color: rgb(71, 71, 71);
}
.modify button:nth-last-of-type(2):disabled:hover {
  transform: scale(1);
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
