const express = require("express");
const app = express();

// Sample data
const recipes = [
  {
    id: 1,
    name: "Chocolate Chip Cookies",
    ingredients:
      "1 Stick Butter \n1/2 Cup Oil \n3/4 Cup Brown & White Sugar \n2 eggs \n1 tsp Vanilla \n2 1/2 Cups Flour \n1 tsp. Baking Soda \n1 tsp. Salt \n1 Cup Chocolate Chips",
    instructions:
      "1. Mix butter, oil and sugars \n2. Mix in eggs and vanilla \n3. Mix in flour, baking soda and salt \n4. Mix in chocolate chips \n5. Freeze for 1 hour \n6. Bake at 300°F for 15 minutes",
  },
  {
    id: 2,
    name: "Snickerdoodle",
    ingredients:
      "1 Cup Butter \n1.5 Cups Sugar \n2 Eggs \n2 tsp Cream of Tartar \n1 tsp Baking Soda \n1/4 tsp Salt \n2 3/4 Cups Flour \nCinnamon Sugar for Rolling",
    instructions:
      "1. Preheat oven to 375°F \n2. Cream butter and sugar \n3. Add eggs and mix \n4. Stir in cream of tartar, baking soda, salt, and flour \n5. Roll into balls and coat in cinnamon sugar \n6. Bake 8–10 minutes",
  },
  {
    id: 3,
    name: "White Chip Chocolate",
    ingredients:
      "1 Cup Butter \n1 Cup Sugar \n1 Cup Brown Sugar \n2 Eggs \n2 tsp Vanilla \n2 Cups Flour \n2/3 Cup Cocoa Powder \n3/4 tsp Baking Soda \n1/4 tsp Salt \n2 Cups White Chocolate Chips",
    instructions:
      "1. Preheat oven to 350°F \n2. Cream butter and sugars \n3. Add eggs and vanilla \n4. Mix in flour, cocoa, baking soda, and salt \n5. Stir in white chocolate chips \n6. Bake 8–10 minutes",
  },
  {
    id: 4,
    name: "Homemade Oreo",
    ingredients:
      "1 Box Devil's Food Cake Mix \n2 Eggs \n1/2 Cup Oil \nFilling: 1/4 Cup Butter, 1/4 Cup Shortening, 1 tsp Vanilla, 2 Cups Powdered Sugar",
    instructions:
      "1. Mix cake mix, eggs, and oil into dough \n2. Roll into small balls and flatten slightly \n3. Bake at 350°F for 8 minutes \n4. Cool completely \n5. Beat filling ingredients together \n6. Sandwich cookies with filling",
  },
  {
    id: 5,
    name: "Peanut Butter M&M",
    ingredients:
      "1/2 Cup Butter \n1/2 Cup Peanut Butter \n1/2 Cup Sugar \n1/2 Cup Brown Sugar \n1 Egg \n1 tsp Vanilla \n1 1/4 Cups Flour \n3/4 tsp Baking Soda \n1/4 tsp Salt \n1 Cup M&Ms",
    instructions:
      "1. Preheat oven to 350°F \n2. Cream butter, peanut butter, and sugars \n3. Add egg and vanilla \n4. Stir in dry ingredients \n5. Fold in M&Ms \n6. Bake 8–10 minutes",
  },
  {
    id: 6,
    name: "Oatmeal",
    ingredients:
      "1 Cup Butter \n1 Cup Brown Sugar \n1/2 Cup Sugar \n2 Eggs \n1 tsp Vanilla \n1 1/2 Cups Flour \n1 tsp Baking Soda \n1 tsp Cinnamon \n3 Cups Oats \n1 Cup Raisins or Chocolate Chips",
    instructions:
      "1. Preheat oven to 350°F \n2. Cream butter and sugars \n3. Add eggs and vanilla \n4. Mix in flour, baking soda, and cinnamon \n5. Stir in oats and raisins/chips \n6. Bake 10–12 minutes",
  },
  {
    id: 7,
    name: "Mexican Wedding Cookie",
    ingredients:
      "1 Cup Butter \n1/2 Cup Powdered Sugar \n2 tsp Vanilla \n2 Cups Flour \n1 Cup Finely Chopped Pecans \nExtra Powdered Sugar for Rolling",
    instructions:
      "1. Preheat oven to 350°F \n2. Cream butter and powdered sugar \n3. Add vanilla \n4. Mix in flour and pecans \n5. Roll into balls \n6. Bake 12–15 minutes \n7. Roll in powdered sugar while warm",
  },
  {
    id: 8,
    name: "No Bake",
    ingredients:
      "1/2 Cup Butter \n2 Cups Sugar \n1/2 Cup Milk \n1/4 Cup Cocoa Powder \n3 Cups Oats \n1 Cup Peanut Butter \n1 tsp Vanilla",
    instructions:
      "1. Combine butter, sugar, milk, and cocoa in saucepan \n2. Bring to boil for 1 minute \n3. Remove from heat \n4. Stir in oats, peanut butter, and vanilla \n5. Drop spoonfuls on wax paper and cool",
  },
  {
    id: 9,
    name: "Sugar Cookie",
    ingredients:
      "1 Cup Butter \n1 1/2 Cups Sugar \n1 Egg \n1 1/2 tsp Vanilla \n2 3/4 Cups Flour \n1 tsp Baking Soda \n1/2 tsp Baking Powder \n1/2 tsp Salt",
    instructions:
      "1. Preheat oven to 375°F \n2. Cream butter and sugar \n3. Add egg and vanilla \n4. Stir in dry ingredients \n5. Roll into balls, flatten slightly \n6. Bake 8–10 minutes",
  },
  {
    id: 10,
    name: "Raspberry Macadamia Nut",
    ingredients:
      "1 Cup Butter \n3/4 Cup Sugar \n3/4 Cup Brown Sugar \n2 Eggs \n1 tsp Vanilla \n2 1/2 Cups Flour \n1 tsp Baking Soda \n1/2 tsp Salt \n1 Cup White Chocolate Chips \n1/2 Cup Macadamia Nuts \n1/2 Cup Raspberry Preserves",
    instructions:
      "1. Preheat oven to 350°F \n2. Cream butter and sugars \n3. Add eggs and vanilla \n4. Mix in flour, baking soda, and salt \n5. Stir in chips and nuts \n6. Drop dough on sheet, press thumbprint in center, fill with raspberry preserves \n7. Bake 10–12 minutes",
  },
];


app.get('/', (req, res) => {
  res.send('Welcome to the Cookie API! Try /recipes to see all recipes.');
});

// Get all recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});

// Get one recipe by id
app.get("/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send("Recipe not found");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API is running at https://cookie-api-cljq.onrender.com`);
});
