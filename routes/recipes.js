const { Router } = require('express')
const controllers = require('../controllers/recipes')

const router = Router()

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

module.exports = router