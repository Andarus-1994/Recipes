import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      recipe: Model,
    },

    seeds(server) {
      server.create("recipe", {
        recipe: "CheeseCake",
        description:
          "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar.",
        ingredients: [
          "2 large EGGS",
          "Four 8-ounce blocks of full-fat cream",
          "300g Sour Cream",
          "50g Sugar",
        ],
        directions: ["Do step 1", "Do step 2"],
      });
      server.create("recipe", {
        recipe: "Butter Swim Biscuits ",
        description:
          "These biscuits are literally swimming in butter prior to baking, hence the name. No need to butter them since they are buttery and fluffy. Perfect for breakfast or for dinner. Great use of pantry items during this stay-at-home order during the Coronavirus pandemic.",
        ingredients: [
          "2 large EGGS",
          "Four 8-ounce blocks of full-fat cream",
          "4 teaspoons baking powder ",
          "4 teaspoons white sugar ",
        ],
        directions: [
          "Preheat the oven to 450 degrees F (230 degrees C).",
          "Place butter in an 8x8-inch glass or ceramic baking dish. Microwave for 1 minute. Stir butter and keep microwaving at 20-second intervals until butter is fully melted.",
          "Bake in the preheated oven until biscuit tops start to brown, 20 to 25 minutes",
        ],
      });
      server.create("recipe", {
        recipe: "Raspberry Lemon Drop Martini",
        description:
          "The lemon drop is without a doubt my favorite cocktail and my go-to drink on hot summer days. ",
        ingredients: [
          "10 fresh raspberries, or more to taste ",
          "2 fluid ounces lemon juice ",
          "2 teaspoons white sugar  ",
          "1 cup ice as needed ",
        ],
        directions: [
          "Muddle 8 raspberries in the bottom of a cocktail shaker with lemon juice and sugar. Add vodka and ice. Shake for 1 minute, then strain into a chilled martini glass. Garnish with remaining raspberries and a lemon wedge.",
          " Drink!",
         
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/recipes", (schema) => {
        return schema.recipes.all();
      });
    },
  });

  return server;
}
