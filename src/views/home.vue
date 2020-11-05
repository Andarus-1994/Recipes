<template>
  <div class="home">
    
    <h1>Recipe Box</h1>
         <Loader v-if="recipes.loading" />
      <ul v-if="!recipes.loading" class="recipe-list">
        <li v-for="(recipe,index) in recipes.list[0]" :key="index"  v-bind:style="index%2===0 ? li : ''" @click="Show(index)">{{recipe.recipe}}</li> 
      </ul>
    <div class="buttons">
      <button v-on:click="Hide">X</button>
      <div v-if="hide">Buna treaba!</div>
    </div>
  </div>
</template>

<script>
import Loader from "../components/Spinner.vue";

export default {
  name: "home",
   components:{
    Loader
  },
  data: () => {
    return {
      hide: true,
      li: {
    backgroundColor:"rgb(33, 126, 163)",
  },
  
      itemList: [
        { recipe: 'Scrambled Eggs', ingredients: ['Eggs','Sunflower Oil'], directions: ['Do step 1','Do step 2']},
        { recipe: 'Chocolate Cake', ingredients: ['Eggs','Flour','Milk'], directions: ['Do step 1','Do step 2','Do step 3']}, 
        { recipe: 'Vanilla Cake', ingredients: ['Eggs','Flour','Milk', 'Vanilla'], directions: ['Do step 1','Do step 2','Do step 3']},   
        { recipe: 'Scrambled Eggs', ingredients: ['Eggs','Sunflower Oil'], directions: ['Do step 1','Do step 2']},       ],
      recipes:{loading:true,list:[]},
     
    };
  },
  created: function () {
    if(localStorage.recipes){
      this.recipes.list.push(JSON.parse(localStorage.recipes));
      console.log(this.recipes);
      this.recipes.loading=false;
    }
    else{
      this.recipes.list.push(this.itemList);
      localStorage.setItem("recipes",JSON.stringify(this.itemList))
      this.recipes.loading=false;
    }
    console.log(this.recipes)
  },
  methods: {
    Show: function(number) {
      console.log(number)
      
    },
    Hide: function() {
      this.hide=!this.hide;
      
    }
  },
 

  
};
</script>

<style lang="css" scoped>
.home {
  
  position: relative;
  color: rgb(255, 255, 255);
 
}
.home h1{
  text-align: center;
font-size: 4rem;
font-family: 'Lobster', cursive;
}
.home ul{
  background-color: rgb(28, 63, 116);
  border-radius: 10px;
  overflow: auto;
  list-style-type: none;
  height:100px;
  width:70%;
  padding: 20px 10px;
  padding-bottom: 30px;
  margin:0 auto;
}
.home ul li{
  cursor: pointer;
  padding: 12px 10px;
  font-size: 0.9rem;
font-family: 'Roboto', sans-serif;
}

.home ul li:hover{
  color:rgb(38, 72, 124);
}
</style>
