<template>
  <div class="modify">
    <button><font-awesome-icon icon="edit" /></button>
    <button @click="deleteRecipe"><font-awesome-icon icon="trash" /></button>
    <ConfirmationBox
      v-if="!hide"
      :confirmation="confirm"
      :recipe="recipes"
      :number="number"
      :deleteFunction="deleteRecipe"
    />
  </div>
</template>

<script>
import ConfirmationBox from "./ConfirmationBox";

export default {
  name: "modify",
  data: () => {
    return {
      hide: true,
      confirm: false,
    };
  },
  components: {
    ConfirmationBox,
  },

  props: {
    number: Number,
    recipes: Array,
  },
  created: function() {
    console.log(this.recipes[0][this.number]);
  },
  methods: {
    deleteRecipe: function() {
      this.hide = !this.hide;
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
  color: rgb(114, 13, 13);
}

.modify button:nth-last-of-type(2):hover {
  color: rgb(255, 255, 255);
}
.modify button:nth-last-of-type(1):hover {
  transform: scale(1.2);
}
</style>
