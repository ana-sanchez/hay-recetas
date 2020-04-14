import React, {useState, useEffect} from 'react';
import '../styles/App.scss';
import { fetchRecipe } from '../services/Api'
import Form from './Form'
import ListRecipe from './ListRecipe'
import Home from './Home'
import Description from './Description'
import { Route, Switch } from 'react-router-dom';


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
  
  const renderRecipes = () => {
    return <div>
        <Form 
          handleClick={handleClick} 
          handleSubmit={handleSubmit} 
          value={value}
        />
        <ListRecipe 
          recipes={recipes} 
          value={value}
        />
    </div>
    }

  return ( 
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/description' component={Description} />
        <Route path='/recipes' render={renderRecipes} />
      </Switch>
  
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
