import api from "./apiSetup";

export const getSubstitution = async () => {
  try {
    const response = await api.get(
      `/food/ingredients/substitutes?ingredientName=${ingredient}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
