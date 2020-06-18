const db = require('../db/connection')
const Recipe = require('../models/recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const recipes = 
    [
        
      ]

    await Recipe.insertMany(recipes)
    console.log("Created recipes!")
}
const run = async () => {
    await main()
    db.close()
}

run()