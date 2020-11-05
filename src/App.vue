<template>
  <div id="app">
    <Home />
  </div>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<script>
import Home from "./views/home.vue";
import Spinner from "./components/Spinner.vue"
export default {
  name: "App",
  data: () => {
    return {
     
    };
  },

  components: {
Home,
Spinner

  },
};
</script>


<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  background-color: rgb(33, 126, 163);
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>