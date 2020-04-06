
const APIKEY = "f65887b9c05a4a45b24059632eca18ac"
// const ENDPOINT =  `https://api.spoonacular.com/recipes/search?query=${value}&number=5&apiKey=${APIKEY}´;

const fetchRecipe = value => fetch(`https://api.spoonacular.com/recipes/search?query=${value}&number=5&apiKey=${APIKEY}`).then(response => response.json());

export { fetchRecipe }
