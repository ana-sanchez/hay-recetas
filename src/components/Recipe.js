import React from 'react';



const Recipe = ({recipe}) => {

  const urlImage = "https://spoonacular.com/recipeImages/";
  return (
    <React.Fragment>
      <h1 className='wrapper__recipe--title'>{recipe.title}</h1>
      <p className='wrapper__recipe--minutes'>{recipe.readyInMinutes} '</p>
      <img  className='wrapper__recipe--image' src={urlImage + recipe.image}  alt={recipe.title} />
    </React.Fragment>
      
  )
}
 
export default Recipe;

