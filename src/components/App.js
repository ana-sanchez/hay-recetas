import React, {useState, useEffect} from 'react';
import '../styles/App.scss';
import { fetchRecipe } from '../services/Api'
// import { Route, Switch } from 'react-router-dom';
import Form from './Form'
import ListRecipe from './ListRecipe'


const App = () => {
 
  const [recipes, setRecipes] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
     fetchRecipe(value)
     .then(data => {
       setRecipes(data.results)
       })
    
  })

  const handleClick = e => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }


  return ( 
    <div className="App">
      <Form handleClick={handleClick} handleSubmit={handleSubmit} value={value} />
      <ListRecipe recipes={recipes} value={value}/>
    </div>
   );
}
 
export default App;



// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       recipes: [],
//       value: ''
//     }
//   }

//   // const clickHandler = value => setValue(value);
  
//   componentDidMount(){
//     fetchRecipe()
//     .then(data => {
//       this.setState({recipes: data.results})
//     })
//   }

//   render() {
//     return (
//     <div className="App">
//       {/* <Form clickHandler={clickHandler} value={value}/> */}
//       <ListRecipe recipes={this.state.recipes}/>
//     </div>
//   );
//   }
// }


// export default App;
