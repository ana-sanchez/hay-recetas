import React from 'react';
import logo from '../images/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Div = styled.div`
  background-color: #F0836E;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  width:200px;
  height: 200px;
`
const Button = styled.button`
  width: 100px;
  height: 35px;
  text-transform:uppercase;
  background-color: white;
  color: #F0836E;
  border: 1px solid white;
  border-radius: 15px;
  margin-top: 50px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;

`

const Home = () => {
  return ( 
    <Div>
      <Logo src={logo} alt='hay recetas'/>
      <Link to='/description'>
        <Button>comenzar</Button>
      </Link>
      
    </Div>
   );
}
 
export default Home;