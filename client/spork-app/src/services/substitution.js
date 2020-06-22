import api from "./apiSetup";

export const getSubstitution = async () => {
  try {
    const response = await api.get(
      `/food/ingredients/substitutes?ingredientName=${""}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
