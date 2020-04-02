import React from 'react';



const Recipe = ({recipe}) => {

  const urlImage = "https://spoonacular.com/recipeImages/";
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.readyInMinutes}</p>
      <img src={urlImage + recipe.image}  alt={recipe.title} />
     </div>
  )
}
 
export default Recipe;

