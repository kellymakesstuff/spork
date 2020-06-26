import axios from axios

useEffect(async () => {
  let inputImage = await axios(`https://spoonacular.com/cdn/ingredients_100x100/${inputValue}.jpg`)
});
console.log(inputImage)

