import api from "./apiSetup"

export const getRecipes = async () => {
  try {
    const response = await api.get("/recipes")
    return response.data
  } catch (error) {
    throw error
  }
}
export const getRecipe = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
export const createRecipe = async (recipes) => {
  try {
    const response = await api.post('/recipes', recipes)
    return response.data
  } catch (error) {
    throw error
  }
}
export const updateRecipe = async (id, recipes) => {
  try {
    const response = await api.put(`/recipes/${id}`, recipes)
    return response.data
  } catch (error) {
    throw error
  }
}
export const deleteRecipe = async (id) => {
  try {
    const response = await api.delete(`/recipes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}