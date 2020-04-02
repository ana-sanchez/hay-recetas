import React, {useState} from 'react';
import '../styles/App.scss';
import { fetchRecipe } from '../services/Api'
// import { Route, Switch } from 'react-router-dom';
import Form from './Form'
import ListRecipe from './ListRecipe'






class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      value: ''
    }
  }

  // const clickHandler = value => setValue(value);
  
  componentDidMount(){
    fetchRecipe()
    .then(data => {
      this.setState({recipes: data.results})
    })
  }

  render() {
    return (
    <div className="App">
      {/* <Form clickHandler={clickHandler} value={value}/> */}
      <ListRecipe recipes={this.state.recipes}/>
    </div>
  );
  }
}


export default App;
