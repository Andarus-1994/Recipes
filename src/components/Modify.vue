<template>
  <div class="modify">
    <button @click="popChangeBox"><font-awesome-icon icon="edit" /></button>
    <button @click="popDeleteConfirmation">
      <font-awesome-icon icon="trash" />
    </button>
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
  </div>
</template>

<script>
import ConfirmationBox from "./ConfirmationBox";
import Change from "./Change";

export default {
  name: "modify",
  data: () => {
    return {
      hide: { modify: true, delete: true },
      confirm: false,
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
    console.log(this.recipes[0][this.number]);
  },
  methods: {
    popDeleteConfirmation: function () {
      this.hide.delete = !this.hide.delete;
    },
    popChangeBox: function () {
      this.hide.modify = !this.hide.modify;
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
</style>
