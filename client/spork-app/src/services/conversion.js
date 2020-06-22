import api from "./apiSetup";

export const getConversion = async () => {
  try {
    const response = await api.get(
      `/recipes/convert?ingredientName=${ingredient}&sourceAmount=${amount}&sourceUnit=${startUnit}&targetUnit=${endUnit}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
