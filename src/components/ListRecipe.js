import React from 'react';
import Recipe from './Recipe';


const ListRecipe = ({value, recipes}) => {

  return ( 
    <ul className='wrapper'>
      {recipes
        .filter(item => value === '' || item.title.toLowerCase().includes(value))
        .map(recipe => {
          return <li className='wrapper__recipe'>
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

