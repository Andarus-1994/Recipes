# Recipes

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
Documentation Recipes:

The main page is formed by one view component that is home.vue which includes all the other components.

At first we can see the search box which has a component on its own named “Search.vue”, then we have the list with the recipes, embedded in the component with the same name “RecipeList.vue”  and in the bottom we have detailed display of a recipe, which is also included in a component called “Details.vue”.

Search is a pretty straightforward component, it has as a prop a function that take one variable and modifies the current searched ingredient.

RecipeList has 3 props, the loading Boolean variable which shows if the recipes are loaded (not really necessary when there is no API calls, but I used it to simulate), the recipes Array (Filtered) which I use to display the name and description of each recipe, and selectedRecipeIndex is a function that takes one variable and keeps the track of what index has the selected Recipe and saves it in the number variable from home component.

Details, as I said, it’s the component that displays the information of a selected recipe, but it also contains 2 more components: HeaderDetails, it is mainly the header side of Details and includes all the features it has, and Add, the footer side, which has one utility, to create new recipes.

In HeaderDetails we can find 3 buttons, 2 of them (to edit or to delete recipe) opening the EditForm and ConfirmationBox components and the third one appeals a function to add a random recipe to the list. EditForm component includes an auto-completed  form with the details of the actual recipe and ConfirmationBox shows up whenever the user tries to delete the chosen recipe. 

Add component includes the button with the sign “+” and the form that is displayed whenever the button is pressed.

