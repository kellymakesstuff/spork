![Spork](https://i.imgur.com/C8yDrQM.png)


See it live! [http://spork-app.surge.sh/](http://spork-app.surge.sh/)



## Overview

**SPORK**

SPORK is a simple to use application to find your new favorite recipes. Search for easy at-home recipes by keyword. Find substitutions for common ingredients. Add your own personal recipes to our database. Add comments on your favorite recipes.

### Team Members

- [Felicia](https://github.com/felicia-csolak)
- [Josh](https://github.com/rizekj12)
- [Kelly](https://github.com/kellymakesstuff) (Team Leader)
- [Zach](https://github.com/zoobieloo88)
- [Zain](https://github.com/zainsattar18)


## Sprint 1

Spork is being completed in consideration of the UX team's design vision and desired featured list as presented. The mission of sprint 1 was to get an MVP product that had its own backend, implemented a dual-feature search bar (both to search for recipes and ingredient substitutions), had screens for search results, substitutions, and individual recipes, and was responsive to tablet and mobile versions. 

Special thanks to the UX team for an incredible design and great teamwork. (They're also pretty funny.)

[Learn more about the team here!](http://spork-app.surge.sh/about)


### MVP and Goals


1. Build backend with express and MongoDB
2. Two-function search bar
3. Recipe search results screen
4. Recipe detail screen
5. Substitution search and detail screen (including measurement conversion)
6. Responsive to tablet and mobile versions

<br>

### Client (Front End)

#### Wireframes

- [View Extended Wireframes on Figma](https://www.figma.com/file/hMdGIyJqlrRW0IC76TyCpm/U3-P3?node-id=0%3A1)

![wireframes](https://i.imgur.com/xAnw5oL.png)


#### Component Hierarchy

[Whimsicle Diagram](https://whimsical.com/9x14YF8QAC2EZWK9V22hWV)

<br>

### Server (Back End)

#### Database Schema

For recipes:
```
const Recipe = new Schema(
  {
    dishName: { type: String, required: true },
    imgUrl: { type: String, required: true },
    starRating: { type: Number, min: 0, max: 5, required: true },
    briefDescription: { type: String, required: true },
    ingredients: [{
      oneAmount: { type: String, required: true },
      oneUnit: { type: String, required: true },
      oneName: { type: String, required: true },
      twoAmount: { type: String, required: true },
      twoUnit: { type: String, required: true },
      twoName: { type: String, required: true },
      threeAmount: { type: String, required: true },
      threeUnit: { type: String, required: true },
      threeName: { type: String, required: true },
      fourAmount: { type: String, required: true },
      fourUnit: { type: String, required: true },
      fourName: { type: String, required: true },
      fiveAmount: { type: String, required: true },
      fiveUnit: { type: String, required: true },
      fiveName: { type: String, required: true },
      sixAmount: { type: String, required: false },
      sixUnit: { type: String, required: false },
      sixName: { type: String, required: false },
      sevenAmount: { type: String, required: false },
      sevenUnit: { type: String, required: false },
      sevenName: { type: String, required: false },
      eightAmount: { type: String, required: false },
      eightUnit: { type: String, required: false },
      eightName: { type: String, required: false },
    }],
    instructions: [{
      stepOne: { type: String, required: true },
      stepTwo: { type: String, required: true },
      stepThree: { type: String, required: true },
      stepFour: { type: String, required: true }
    }],
    prepTime: { type: String, required: true },
    comments: [{type: Schema.Types.ObjectId, ref: "comments" }]
  },
  { timestamps: true }
)

```

For comments:
```
const Comment = new Schema(
    {
        name: {type: String, required: true},
        comment: {type: String, required: true},
        starRating: {type: Number, required: true}

    },{
        timestamps: true
    }
)
```

### Express Routes

```
router.get('/recipes', controllers.getRecipes)
router.get('/recipes/:id', controllers.getRecipe)
router.post('/recipes', controllers.createRecipe)
router.put('/recipes/:id', controllers.updateRecipe)
router.delete('/recipes/:id', controllers.deleteRecipe)
router.post('/comments/:id', controllers.createComment)
//createComment would be the recipe _id
router.put('/comments/:id', controllers.updateComment)
//updateComment would be the comment _id
router.delete('/comments/:id', controllers.deleteComment)
//deleteComment would be the comment _id
```

### Libraries

> Use this section to list all supporting libraries and dependencies and their role in the project.

|    Library     | Description                                |
| :------------: | :----------------------------------------- |
|     React      | Using class and function-based components |
|  React Router  | Router to accomodate FullRecipe, Substitutions, Comments renders by id |
|    Express     | Creating backend API with full CRUD|
| Express Router | |
|    Mongoose    | |

<br>

***

## Goals for Sprint 2

> Coming soon

***

## Code Issues & Resolutions

Current known issue: initial API load is large and thus takes time to populate carousel on home page (solution coming soon)

Current known issue: New API Key needed for Spoonacular for Substitutes page, Substitutes page may not populate until new key is inserted (working on now)
***

## Change Log

> Coming soon
