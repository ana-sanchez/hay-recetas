const ENDPOINT =   "https://api.spoonacular.com/recipes/search?query=cheese&number=5&apiKey=f65887b9c05a4a45b24059632eca18ac"

const fetchRecipe = () => fetch(ENDPOINT).then(response => response.json());

export { fetchRecipe }
