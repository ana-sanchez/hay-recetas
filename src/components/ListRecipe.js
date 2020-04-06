import React from 'react';
import Recipe from './Recipe';


const ListRecipe = ({value, recipes}) => {

  return ( 
    <ul>
      {recipes
        .filter(item => value === '' || item.title.toLowerCase().includes(value))
        .map(recipe => {
          return <li>
            <Recipe 
              recipe={recipe}
             />
          </li>
      })
      
      }
    </ul>
   );
}
 
export default ListRecipe;

