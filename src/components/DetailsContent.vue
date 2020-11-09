<template>
  <div class="detailsContent">
    <h1 v-if="recipes[number]">{{ recipes[number].recipe }}</h1>

    <ul v-if="recipes[number]">
      <h1>Ingredients:</h1>
      <li
        v-for="(ingredient, index) in recipes[number].ingredients"
        :key="index"
      >
        {{ ingredient }}
      </li>
    </ul>
    <ul>
      <div v-if="recipes[number]">
        <h1>Directions</h1>
        <li
          v-for="(direction, index) in recipes[number].directions"
          :key="index"
        >
          {{ direction }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "detailsContent",

  props: {
    number: Number,
    recipes: Array,
  },
};
</script>

<style lang="css" scoped>
.detailsContent h1 {
  margin: 5px 10px;
}

.detailsContent ul {
  min-height: 200px;
  list-style-type: none;
  margin: 30px 0;
}
.detailsContent ul:nth-of-type(2) {
  list-style-type: decimal;
}
</style>
