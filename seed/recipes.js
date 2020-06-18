const db = require('../db/connection')
const Recipe = require('../models/recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  await Recipe.deleteMany()
  const recipes = [
    {
      "dishName": "Maple Salmon",
      "imgUrl": "https://images.unsplash.com/photo-1556845752-92f6fe9f596d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      "starRating": "2",
      "ingredients": "Salmon,Garlic, Salt",
      "instructions": [{
        "stepOne": "In a small bowl, mix the maple syrup, soy sauce, garlic, garlic salt, and pepper.",
        "stepTwo": "Place salmon in a shallow glass baking dish, and coat with the maple syrup mixture. Cover the dish, and marinate salmon in the refrigerator 30 minutes, turning once.",
        "stepThree": "Preheat oven to 400 degrees F (200 degrees C).",
        "stepFour": "Place the baking dish in the preheated oven, and bake salmon uncovered 20 minutes, or until easily flaked with a fork."
      }],
      "prepTime": "30 minutes"
    },
    {
      "dishName": "Baked Cod",
      "imgUrl": "https://images.unsplash.com/photo-1587913956756-4fcf4833241d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      "starRating": "4",
      "ingredients": "Cod,Lemon,Salt,Parsley",
      "instructions": [{
        "stepOne": "Preheat oven to 400 degrees F (200 degrees C).",
        "stepTwo": "Coat both sides of cod in melted butter in the baking dish.",
        "stepThree": "Bake cod in the preheated oven for 10 minutes. Remove from oven; top with lemon juice, wine, and cracker mixture. Place back in oven and bake until fish is opaque and flakes easily with a fork, about 10 more minutes",
        "stepFour": "Garnish baked cod with parsley and green onion. Serve with lemon wedges."
      }],
      "prepTime": "40 minutes"
    },
    {
      "dishName": "Blackened Tuna",
      "imgUrl": "https://images.unsplash.com/photo-1530260626688-048279320445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      "starRating": "5",
      "ingredients": "Tuna,Cajan Seasoning,Olive Oil,Butter",
      "instructions": [{
        "stepOne": "Generously coat tuna with Cajun seasoning.",
        "stepTwo": "Heat oil and butter in a large skillet over high heat. ",
        "stepThree": "When oil is nearly smoking, place steaks in pan. ",
        "stepFour": "Cook on one side for 3 to 4 minutes, or until blackened. Turn steaks, and cook for 3 to 4 minutes, or to desired doneness."
      }],
      "prepTime": "15 minutes"
    },
    {
      "dishName": "Fish Tacos",
      "imgUrl": "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      "starRating": "4",
      "ingredients": "Tilapia Fillets,Peppers, Flour Tortillas,Olive Oil,Cilantro",
      "instructions": [{
        "stepOne": "Mix sour cream and lime juice together in a large bowl; season with salt and black pepper. Reserve about half the mixture in another bowl for serving. Mince half the jalapeno pepper; save other half for later. Toss cabbage, green onions, and minced jalapeno half in remaining sour cream mixture until slaw is well mixed.",
        "stepTwo": "Heat olive oil and remaining jalapeno half in a large skillet over medium heat; swirl oil to coat skillet evenly. Season tilapia fillets with salt and pepper.",
        "stepThree": "Heat tortillas in the microwave on high until warm, 20 to 30 seconds.",
        "stepFour": "Serve fish in warmed tortillas topped with cabbage slaw, reserved sour cream mixture, and cilantro"
      }],
      "prepTime": "35 minutes"
    },
    {
      "dishName": "Mahi Mahi",
      "imgUrl": "https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "starRating": "5",
      "ingredients": "Mahi Mahi Fillets,Garlic, Ginger,Olive Oil,Honey",
      "instructions": [{
        "stepOne": "In a shallow glass dish, stir together the honey, soy sauce, balsamic vinegar, ginger, garlic and olive oil. Season fish fillets with salt and pepper, and place them into the dish. ",
        "stepTwo": "Heat vegetable oil in a large skillet over medium-high heat. Remove fish from the dish, and reserve marinade. Fry fish for 4 to 6 minutes on each side, turning only once, until fish flakes easily with a fork. Remove fillets to a serving platter and keep warm.",
        "stepThree": "Pour reserved marinade into the skillet, and heat over medium heat until the mixture reduces to a glaze consistently.",
        "stepFour": " Spoon glaze over fish, and serve immediately."
      }],
      "prepTime": "45 minutes"
    },
    {
      "dishName": "Vegetarian Chili",
      "imgUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "starRating": "3",
      "ingredients": "Crushed Tomatoes, Peppers, Drained Kidney Beans, Ginger,Corn,Olive Oil",
      "instructions": [{
        "stepOne": "Heat the olive oil in a large pot over medium heat. Stir in the onion, and season with bay leaves, cumin, oregano, and salt.",
        "stepTwo": "Cook and stir until onion is tender, then mix in the celery, green bell peppers, jalapeno peppers, garlic, and green chile peppers. When vegetables are heated through, mix in the vegetarian burger crumbles. Reduce heat to low, cover pot, and simmer 5 minutes",
        "stepThree": "Mix the tomatoes into the pot. Season chili with chili powder and pepper. Stir in the kidney beans, garbanzo beans, and black beans.",
        "stepFour": "  Bring to a boil, reduce heat to low, and simmer 45 minutes. Stir in the corn, and continue cooking 5 minutes before serving."
      }],
      "prepTime": "55 minutes"
    },
    {
      "dishName": "Kale Soup",
      "imgUrl": "https://images.unsplash.com/photo-1490731678285-2e5640f5a918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "starRating": "2",
      "ingredients": "Kale Soup, White Potatoes, Drained  Beans, Parsley, Salt, Olive Oil",
      "instructions": [{
        "stepOne": "Heat the olive oil in a large soup pot; cook the onion and garlic until soft. Stir in the kale and cook until wilted, about 2 minutes.",
        "stepTwo": " Stir in the water, vegetable bouillon, tomatoes, potatoes, beans, Italian seasoning, and parsley. ",
        "stepThree": "Simmer soup on medium heat for 25 minutes, or until potatoes are cooked through. ",
        "stepFour": "Season with salt and pepper to taste."
      }],
      "prepTime": "25 minutes"
    },
    {
      "dishName": "Vegetarian Quesadillas",
      "imgUrl": "https://images.unsplash.com/photo-1573010288252-e958ff11effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "starRating": "5",
      "ingredients": "Red Onions, Yellow Squash, Zucchini, Whole Wheat Tortillas, Low-Fat Cheese, Olive Oil ",
      "instructions": [{
        "stepOne": "In a large nonstick pan, cook red pepper, zucchini, yellow squash, onion, and mushrooms in olive oil over medium to medium-high heat for about 7 minutes, or until just tender.",
        "stepTwo": "Coat the same pan with cooking spray, and place one tortilla in pan. Sprinkle 1/4 cup of cheese evenly over tortilla, and layer 3/4 cup of the vegetable mixture over the cheese.",
        "stepThree": "Sprinkle another 1/8 cup of cheese on the vegetables, and top with a second tortilla. Cook until golden on both sides, for approximately 2 to 3 minutes per side.",
        "stepFour": "Remove quesadilla from pan, and repeat with remaining ingredients. Cut each quesadilla into 8 triangles with a pizza cutter. Serve hot."
      }],
      "prepTime": "35 minutes"
    },
    {
      "dishName": "Vegetarian Wrap",
      "imgUrl": "https://images.unsplash.com/photo-1542128722-d6fe34923abc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "starRating": "4",
      "ingredients": "Tortilla Wrap, Hummus, Spinach, Tomato, Avocado, Cucumber",
      "instructions": [{
        "stepOne": "Spread the hummus on the bottom 1/3 of the wrap, about 1/2 inch from the bottom edge but spreading out the the side edges",
        "stepTwo": "Layer the cucumber, spinach leaves, tomato slices, avocado.",
        "stepThree": "Fold the wrap tightly, as you would a burrito, tucking in all of the veggies with the first roll then rolling firmly to the end. ",
        "stepFour": "Cut in half and enjoy."
      }],
      "prepTime": "15 minutes"
    },
    {
      "dishName": "Vegetarian Quiche",
      "imgUrl": "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "starRating": "5",
      "ingredients": "Flour, Zucchini, Green Bell Pepper, Mushrooms, Milk, Onion, Salt & Peppers",
      "instructions": [{
        "stepOne": "Bake pie crust in preheated oven until firm, about 8 minutes. Remove crust from oven and set aside. Reduce oven heat to 350 degrees F (175 degrees C.",
        "stepTwo": "Spread 1 cup Colby-Monterey Jack cheese in the bottom of pie crust. Layer vegetable mixture over the cheese and top with the tomatoes. Pour egg mixture into pie shell. Sprinkle remaining 1/2 cup cheese atop the quiche.",
        "stepThree": "Heat olive oil in a large skillet over medium heat. Cook and stir onion, green bell pepper, mushrooms, and zucchini in hot oil until soft, 5 to 7 minutes. Remove vegetables from skillet and set aside.",
        "stepFour": "Bake in preheated oven until a knife inserted near the center comes out clean, 40 to 45 minutes. Cool 5 minutes before serving."
      }],
      "prepTime": "35 minutes"
    },
    {
      "dishName": "Garlic Butter Steak Bites",
      "imgUrl": 'https://www.jocooks.com/wp-content/uploads/2018/10/garlic-butter-steak-bites-1-2.jpg',
      "starRating": 5,
      "ingredients": "4 cloves garlic, 1/2 teaspoon freshly ground black pepper, 1/4 cup chopped fresh parsley leaves, 2 pounds thick-cut New York strip steaks, 1/2 teaspoon kosher salt, 8 tablespoons (1 stick) unsalted butter",
      "instructions": [{
        "stepOne": 'Mince 4 garlic cloves. Transfer to a bowl and add 1/2 teaspoon freshly ground black pepper. Chop until you have 1/4 cup fresh parsley leaves, then transfer to a small bowl.',
        "stepTwo": 'Cut 2 pounds New York strip steak into 1-inch cubes, then season it with 1/2 teaspoon kosher salt.',
        "stepThree": 'Melt 8 tablespoons (1 stick) unsalted butter in a large skillet over medium high-heat. Add the steak cubes and sear until browned, flipping them halfway through, 6 to 8 minutes total.',
        "stepFour": 'Add the garlic and pepper and cook for 1 minute more. Remove from the heat and garnish with the parsley.'
      }],
      "prepTime": '25 minutes'
    },
    {
      "dishName": 'Sirloin Steak Sandwiches',
      "imgUrl": 'https://s23991.pcdn.co/wp-content/uploads/fly-images/97617/jamie-oliver-steak-sandwiches-recipe-400x300-c.jpg',
      "starRating": 5,
      "ingredients": "1 pound sirloin steak, 1 teaspoon kosher salt, 1/4 teaspoon freshly ground black pepper, 1/3 cup mayonnaise, 1/4 cup whole-grain mustard, 4 onion rolls, sliced in half lengthwise",
      "instructions": [{
        "stepOne": 'Arrange a rack about 4 inches from the broiler and heat the broiler to high. Line a rimmed baking sheet with aluminum foil. Coat a wire rack with cooking spray and fit over the baking sheet.',
        "stepTwo": 'Pat the steak dry with a paper towel. Season both sides with the salt and pepper and place on the wire rack. Broil (the steak should be 1 to 2 inches from the broilers heating element) for 5 minutes',
        "stepThree": 'Let the steak rest for 10 minutes on the rack',
        "stepFour": 'Spread a thick layer of Dijon mayonnaise on the cut sides of the rolls. Divide the steak and arugula between the rolls and close them to form sandwiches. Serve warm or at room temperature.'
      }],
      "prepTime": '30 minutes'
    }

  ]

  await Recipe.insertMany(recipes)
  console.log("Created recipes!")
}
const run = async () => {
  await main()
  db.close()
}

run()