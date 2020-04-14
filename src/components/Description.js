import React from 'react';
import ingredients from '../images/ingredients.png'
import icon from '../images/x-ico.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Div = styled.div`
  width:100%;
  margin:auto;
  padding:100px 50px 20px 20px;
`

const IconOnion = styled.img`
  width: 50px;

`
const IconX =styled.img`
  width: 15px;
  margin: 10px;
`
const Button = styled.button`
  width: 40px;
  height:40px;
  border: 1px solid #F0836E;
  border-radius: 50%;
  background-color:#F0836E;
  color: white;
  margin-top:20px;
  font-size:16px;
  font-weight:700;
`


const Description = () => {
  return ( 
    <Div>
      <IconOnion src={ingredients}/>
      <p>Indica el ingrediente principal que tienes en la nevera</p>
      <IconX src={icon} />
      <IconOnion src={ingredients}/>
      <p>Indica la cantidad de ingredientes que tienes en la nevera</p>
      <Link to='/recipes'>
      <Button>></Button>
      </Link>
    </Div>
   );
}
 
export default Description;